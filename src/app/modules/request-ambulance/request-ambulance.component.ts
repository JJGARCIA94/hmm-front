import { Component } from '@angular/core';
import { BreakpointService } from '../../services/breakpointService.service';
import { Subscription } from 'rxjs';
import { MOBILE_SIZE } from '../../constanst/util.constans';
import { RequestAmbulanceService } from '../../services/requestAmbulance.service';
import { IRequestAmbulance } from '../../models/request-ambulance.model';

@Component({
  selector: 'app-request-ambulance',
  templateUrl: './request-ambulance.component.html',
  styleUrl: './request-ambulance.component.scss'
})
export class RequestAmbulanceComponent {
  public center!: google.maps.LatLngLiteral;
  public markerOptions: google.maps.MarkerOptions = { draggable: false };
  public markerPositions!: google.maps.LatLngLiteral;
  public isMobile: boolean = false;
  private windowWidthSubscription!: Subscription;

  constructor(private breakpointService: BreakpointService, private requestAmbulanceService: RequestAmbulanceService) {
    this.getCurrentLocation();
  }

  ngOnInit(): void {
    this.windowWidthSubscription = this.breakpointService.windowWidth$.subscribe(width => {
      this.isMobile = width < MOBILE_SIZE;
    });
  }

  private getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        this.center = {
          lat,
          lng
        };
        this.markerPositions = this.center;
      }, (error) => {
        console.error('Error al obtener la ubicación:', error);
      });
    } else {
      console.error('La geolocalización no es compatible con este navegador.');
    }
  }

  public addMarker(event: google.maps.MapMouseEvent) {
    if (!event.latLng) {
      return;
    }

    this.center = event.latLng.toJSON();
    this.markerPositions = this.center;
  }

  public onRequestAmbulance(): void {
    const request: IRequestAmbulance = {
      urlMap: `https://www.google.com/maps?q=${this.center.lat},${this.center.lng}`
    }
    this.requestAmbulanceService.requestAmbulance(request).subscribe(response => {
      console.log(response);
    })
  }

  ngOnDestroy(): void {
    this.windowWidthSubscription.unsubscribe();
  }
}

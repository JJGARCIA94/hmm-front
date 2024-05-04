import { Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTE_PREADMISSION } from '../constanst/routue.constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  zoom = 12;
  center: google.maps.LatLngLiteral = {
    lat: 22.2736308,
    lng: 70.7512555
  };
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  };
  public isLauncherButtonCharge: boolean = false;
  private launcherButton!: HTMLElement;
  constructor(private router: Router, private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    this.loadScript();
  }

  public onGoToPreAdmission(): void {
    this.router.navigate([`/${ROUTE_PREADMISSION}`]);
  }

  public onOpenBookAppointment(): void {
    this.launcherButton.click();
  }

  private loadScript(): void {
    const script = this.renderer.createElement('script');
    script.src = 'https://app.tuotempo.com/mop/mop-launcher/dist/tt-mop-launcher.php';
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('tt-mop-launcher-plugin', '');
    script.setAttribute('tt-instance', 'tt_hmarinam_prod');

    script.onload = () => {
      const interval = setInterval(() => {
        this.launcherButton = document.querySelector('#tt-mop-launcher .launcher-open-icon') as HTMLElement;
        if (this.launcherButton) {
          this.isLauncherButtonCharge = true;
          /* this.launcherButton.click(); */
          clearInterval(interval);
        }
      }, 1000);
    };

    this.renderer.appendChild(document.body, script);//todo mover el icono circulo a la izquierda y dibujarle un rectangulo que tenga texto a la derecha
  }
}

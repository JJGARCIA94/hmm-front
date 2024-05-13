import { Component, ElementRef } from '@angular/core';
import { IImagesCarouselItem } from '../../models/images-carousel.model';
import { EventService } from '../../services/event.service';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { EVENT_GET_DOCTORS_SEARCH } from '../../constanst/event.constant';
import { CacheService } from '../../services/cache.service';
import { Router } from '@angular/router';
import { ROUTE_DOCTORS_SPECIALITIES } from '../../constanst/routue.constants';
import { searchDoctorsKey } from '../../services/doctor.service';

@Component({
  selector: 'app-principal-information',
  templateUrl: './principal-information.component.html',
  styleUrl: './principal-information.component.scss'
})
export class PrincipalInformationComponent {
  public images: IImagesCarouselItem[] = [
    { id: 1, image: 'assets/images/caroucel-information4.PNG', title: 'caroucel-information1', height: 550 },
    { id: 2, image: 'assets/images/caroucel-information2.jpg', title: 'caroucel-information2', height: 550 },
    { id: 3, image: 'assets/images/caroucel-information3.jpg', title: 'caroucel-information3', height: 550 },
  ];
  private destroyerNotifier: Subject<void> = new Subject();
  private subscription!: Subscription;
  
  constructor(private eventService: EventService, private cacheService: CacheService, private router: Router) { }

  ngOnInit(): void {
    this.subscription = this.eventService.on(EVENT_GET_DOCTORS_SEARCH)
      .pipe(takeUntil(this.destroyerNotifier))
      .subscribe(
        (data) => {
          this.cacheService.setValue(searchDoctorsKey, data);
          this.router.navigate([`/${ROUTE_DOCTORS_SPECIALITIES}`]);
          this.eventService.complete();
        }
      );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

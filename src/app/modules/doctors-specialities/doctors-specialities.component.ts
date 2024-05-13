import { Component, ViewChild } from '@angular/core';
import { EventService } from '../../services/event.service';
import { EVENT_CALL_GET_DOCTORS_SEARCH, EVENT_GET_DOCTORS_SEARCH } from '../../constanst/event.constant';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { DOCTOR_IMAGES_ROUTE } from '../../constanst/doctor.constants';
import { environment } from '../../environments/environment';
import { ISearchedDoctor } from '../../models/doctor.model';
import { CacheService } from '../../services/cache.service';
import { searchDoctorsKey } from '../../services/doctor.service';

@Component({
  selector: 'app-doctors-specialities',
  templateUrl: './doctors-specialities.component.html',
  styleUrl: './doctors-specialities.component.scss'
})
export class DoctorsSpecialitiesComponent {
  public doctors: ISearchedDoctor[] = [];
  public totalRows: number = 0;
  public eventPagination: string = EVENT_CALL_GET_DOCTORS_SEARCH;
  private destroyerNotifier: Subject<void> = new Subject();
  private subscription!: Subscription;
  constructor(private eventService: EventService, private cacheService: CacheService) { }

  ngOnInit(): void {
    this.subscription = this.eventService.on(EVENT_GET_DOCTORS_SEARCH)
      .pipe(takeUntil(this.destroyerNotifier))
      .subscribe(
        (data) => {
          this.totalRows = data.data?.response.total || 0;
          data.data.response.result.forEach((item: ISearchedDoctor) => {
            item.image = item.image ? `${environment.apiURL}${DOCTOR_IMAGES_ROUTE}/${item.image}` : 'assets/doctors/default-doctor.png';
            item.showDetails = false;
          });
          this.doctors = data.data.response.result;
          this.eventService.complete();
        }
      );

    const searchDoctorsCache = this.cacheService.getValue(searchDoctorsKey);
    if (!searchDoctorsCache) {
      this.eventService.broadcast({ id: EVENT_CALL_GET_DOCTORS_SEARCH, data: 1 });
    }
  }

  public toggleDetails(doctor: ISearchedDoctor): void {
    doctor.showDetails = !doctor.showDetails;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

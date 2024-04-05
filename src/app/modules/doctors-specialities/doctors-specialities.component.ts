import { Component } from '@angular/core';
import { EventService } from '../../services/event.service';
import { EVENT_GET_DOCTORS_SEARCH } from '../../constanst/event.constant';
import { Subject, takeUntil } from 'rxjs';
import { DOCTOR_IMAGES_ROUTE } from '../../constanst/doctor.constants';
import { environment } from '../../environments/environment';
import { ISearchedDoctor } from '../../models/doctor.model';

@Component({
  selector: 'app-doctors-specialities',
  templateUrl: './doctors-specialities.component.html',
  styleUrl: './doctors-specialities.component.scss'
})
export class DoctorsSpecialitiesComponent {
  public doctors: ISearchedDoctor[] = [];
  private destroyerNotifier: Subject<void> = new Subject();

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.on(EVENT_GET_DOCTORS_SEARCH)
      .pipe(takeUntil(this.destroyerNotifier))
      .subscribe(
        (data) => {
          data.data.forEach((item: ISearchedDoctor) => {
            item.image = `${environment.apiURL}${DOCTOR_IMAGES_ROUTE}/${item.image}`;
            item.showDetails = false;
          });
          this.doctors = data.data;
          this.eventService.complete();
        }
      );
  }

  public toggleDetails(doctor: ISearchedDoctor): void {
    doctor.showDetails = !doctor.showDetails;
  }
}

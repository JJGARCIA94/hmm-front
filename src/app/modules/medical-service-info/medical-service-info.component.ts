import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpecialityService } from '../../services/speciality.service';
import { DoctorService } from '../../services/doctor.service';
import { ISpeciality } from '../../models/speciality.model';
import { ROUTE_SERVICE_INFO } from '../../constanst/routue.constants';
import { ISearchedDoctor } from '../../models/doctor.model';
import { environment } from '../../environments/environment';
import { DOCTOR_IMAGES_ROUTE } from '../../constanst/doctor.constants';
import { EVENT_CALL_GET_SPECIALTIES } from '../../constanst/event.constant';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-medical-service-info',
  templateUrl: './medical-service-info.component.html',
  styleUrl: './medical-service-info.component.scss'
})
export class MedicalServiceInfoComponent {
  public idService: string = '';
  public title: string = 'Nuestros servicios';
  public description: string = 'Con más de 55 especialidades médicas, ofrecemos servicios desde primer contacto hasta servicios de alta especialidad, para cuidar de cada uno de nuestros pacientes en cualquier etapa de su vida.';
  public specialties: ISpeciality[] = [];
  public doctors: ISearchedDoctor[] = [];
  public serviceExist: boolean = true;
  public totalRows: number = 0;
  public eventPagination: string = EVENT_CALL_GET_SPECIALTIES;
  private destroyerNotifier: Subject<void> = new Subject();
  private subscription!: Subscription;
  
  constructor(private route: ActivatedRoute, private specialityService: SpecialityService, private doctorService: DoctorService, private router: Router, private eventService: EventService){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idService = params['id'];

      if(this.idService) {
        this.description = 'Estos son nuestros médicos de esta especialidad:';
        this.getSpecialtyById();
      }
      else {
        this.getSpecialties();
      }
    });

    this.subscription = this.eventService.on(EVENT_CALL_GET_SPECIALTIES)
      .pipe(takeUntil(this.destroyerNotifier))
      .subscribe(
        (data) => {
          this.getSpecialties(data.data);
          this.eventService.complete();
        }
      );
  }

  private getSpecialties(page: number = 1): void {
    this.specialityService.getSpecialtiesPagination(page).subscribe(response => {
      this.specialties = response.result;
      this.totalRows = response.total;
    });
  }

  private getSpecialtyById(): void {
    this.specialityService.getSpecialtyById(this.idService).subscribe(response => {
      if(!response) {
        this.title = 'Servicio no encontrado';
        this.description = 'El servicio que buscaba no ha sido encontrado.';
        this.serviceExist = false;
        return;
      }

      this.title = response.name;
      this.getDoctorsBySpecialty();
    });
  }

  private getDoctorsBySpecialty(): void {
    this.doctorService.getDoctorsBySpecialty(this.idService).subscribe(response => {
      response.forEach((item: ISearchedDoctor) => {
        item.image = item.image ? `${environment.apiURL}${DOCTOR_IMAGES_ROUTE}/${item.image}` : 'assets/doctors/default-doctor.png';
        item.showDetails = false;
      });
      this.doctors = response;
    });
  }

  public onSeeMore(idService: number): void {
    const paramRouteService = `/${idService}`;
    this.router.navigate([`/${ROUTE_SERVICE_INFO}${paramRouteService}`]);
  }

  public onGoToAllService(): void {
    this.router.navigate([`/${ROUTE_SERVICE_INFO}`]);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

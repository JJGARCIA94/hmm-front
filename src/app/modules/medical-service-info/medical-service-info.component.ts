import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpecialityService } from '../../services/speciality.service';
import { DoctorService } from '../../services/doctor.service';
import { ISpeciality } from '../../models/speciality.model';
import { ROUTE_SERVICE_INFO } from '../../constanst/routue.constants';
import { ISearchedDoctor } from '../../models/doctor.model';
import { environment } from '../../environments/environment';
import { DOCTOR_IMAGES_ROUTE } from '../../constanst/doctor.constants';

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
  
  constructor(private route: ActivatedRoute, private specialityService: SpecialityService, private doctorService: DoctorService, private router: Router){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idService = params['id'];
      console.log(this.idService);

      if(this.idService) {
        this.description = 'Estos son nuestros médicos de esta especialidad:';
        this.getSpecialtyById();
      }
      else {
        this.getSpecialties();
      }
    });
  }

  private getSpecialties(): void {
    this.specialityService.getSpecialties().subscribe(response => {
      this.specialties = response;
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
      console.log(response);
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
}

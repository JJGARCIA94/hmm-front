import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ISpeciality } from '../../models/speciality.model';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { SpecialityService } from '../../services/speciality.service';
import { HospitalService } from '../../services/hospital.service';
import { IHospital } from '../../models/hospital.model';
import { DoctorService } from '../../services/doctor.service';
import { ISearchDoctors } from '../../models/doctor.model';
import { CacheService } from '../../services/cache.service';
import { Router } from '@angular/router';
import { ROUTE_DOCTORS_SPECIALITIES } from '../../constanst/routue.constants';
import { EventService } from '../../services/event.service';
import { EVENT_GET_DOCTORS_SEARCH } from '../../constanst/event.constant';

@Component({
  selector: 'app-search-doctors',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatIconModule, MatDividerModule],
  templateUrl: './search-doctors.component.html',
  styleUrl: './search-doctors.component.scss'
})
export class SearchDoctorsComponent {
  readonly searchDoctorsKey = 'search-doctors-registration';
  public get search(): AbstractControl | null { return this.searchDoctorsForm.get('search') }
  public get specialty(): AbstractControl | null { return this.searchDoctorsForm.get('specialty') }
  public get hospital(): AbstractControl | null { return this.searchDoctorsForm.get('hospital') }
  public specialties: ISpeciality[] = [];

  public hospitals: IHospital[] = [];

  public searchDoctorsForm: FormGroup = this.formBuilder.group({
    search: ['', [Validators.maxLength(100)]],
    specialty: [0],
    hospital: [0],
  });
  private pathName: string = '';

  constructor(private formBuilder: FormBuilder, private specialityService: SpecialityService, private hospitalService: HospitalService, private doctorService: DoctorService, private cacheService: CacheService, private router: Router, private eventService: EventService) { }

  ngOnInit(): void {
    this.pathName = window.location.pathname.replace('/', '');
    this.specialityService.getSpecialties().subscribe(response => {
      this.specialties = response;
    });

    this.hospitalService.getHospitals().subscribe(response => {
      this.hospitals = response;
    });

    this.getCache();
  }

  private getCache(): void {
    const searchDoctorsCache = this.cacheService.getValue(this.searchDoctorsKey);
    if(searchDoctorsCache) {
      this.search?.setValue(searchDoctorsCache.doctor);
      this.specialty?.setValue(searchDoctorsCache.idSpeciality);
      this.hospital?.setValue(searchDoctorsCache.idHospital);
      this.eventService.broadcast({ id: EVENT_GET_DOCTORS_SEARCH, data: searchDoctorsCache.response });
      this.cacheService.clearCache(this.searchDoctorsKey);
    }
    else if(this.pathName === ROUTE_DOCTORS_SPECIALITIES) {
      this.onSearchDoctors();
    }
  }

  public onSearchDoctors(page: number = 1): void {
    const params: ISearchDoctors = {
      idSpeciality: this.specialty?.value,
      idHospital: this.hospital?.value,
      doctor: this.search?.value,
      page: page
    }
    this.doctorService.getSearchDoctors(params).subscribe(response => {
      if(this.pathName === ROUTE_DOCTORS_SPECIALITIES) {
        this.eventService.broadcast({ id: EVENT_GET_DOCTORS_SEARCH, data: response });
        return;
      }

      params.response = response;
      this.cacheService.setValue(this.searchDoctorsKey, params);
      this.router.navigate([`/${ROUTE_DOCTORS_SPECIALITIES}`]);
    });
  }

  public onSelectDerivation(idSpeciality: number): void {
    this.specialty?.setValue(idSpeciality);
    this.search?.setValue('');
    this.hospital?.setValue(0);
    this.onSearchDoctors();
  }

  public onSubmitSearchDoctorForm(): void {
    this.searchDoctorsForm.markAllAsTouched();
    if(this.searchDoctorsForm.invalid) {
      return;
    }

    this.onSearchDoctors();
  }
}

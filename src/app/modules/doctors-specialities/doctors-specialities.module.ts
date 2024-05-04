import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorsSpecialitiesComponent } from './doctors-specialities.component';
import { RouterModule, Routes } from '@angular/router';
import { SearchDoctorsComponent } from '../../components/search-doctors/search-doctors.component';
import { DoctorCardComponent } from '../../components/doctor-card/doctor-card.component';

const routes: Routes = [
  { path: '', component: DoctorsSpecialitiesComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [DoctorsSpecialitiesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SearchDoctorsComponent,
    DoctorCardComponent
  ],
})
export class DoctorsSpecialitiesModule { }
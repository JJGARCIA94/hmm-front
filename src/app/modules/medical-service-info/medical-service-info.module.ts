import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicalServiceInfoComponent } from './medical-service-info.component';
import { RouterModule, Routes } from '@angular/router';
import { MedicalServiceCardComponent } from '../../components/medical-service-card/medical-service-card.component';
import { DoctorCardComponent } from '../../components/doctor-card/doctor-card.component';

const routes: Routes = [
  { path: '', component: MedicalServiceInfoComponent, pathMatch: 'full' },
  { path: ':id', component: MedicalServiceInfoComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [MedicalServiceInfoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MedicalServiceCardComponent,
    DoctorCardComponent
  ],
  exports: [MedicalServiceInfoComponent]
})
export class MedicalServiceInfoModule { }

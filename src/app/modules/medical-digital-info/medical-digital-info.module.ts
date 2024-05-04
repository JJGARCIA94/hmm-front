import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicalDigitalInfoComponent } from './medical-digital-info.component';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  { path: '', component: MedicalDigitalInfoComponent, pathMatch: 'full' }
];


@NgModule({
  declarations: [MedicalDigitalInfoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule
  ],
  exports: [MedicalDigitalInfoComponent]
})
export class MedicalDigitalInfoModule { }

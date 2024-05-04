import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestAmbulanceComponent } from './request-ambulance.component';
import { RouterModule, Routes } from '@angular/router';
import { GoogleMapsModule } from '@angular/google-maps';

const routes: Routes = [
  { path: '', component: RequestAmbulanceComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [RequestAmbulanceComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    GoogleMapsModule
  ],
  exports: [RequestAmbulanceComponent]
})
export class RequestAmbulanceModule { }

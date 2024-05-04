import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ROUTE_BLOG_INFO, ROUTE_DOCTORS_SPECIALITIES, ROUTE_HIGH_SPECIALTY_CENTERS, ROUTE_MEDICAL_DIGITAL, ROUTE_PREADMISSION, ROUTE_PRINCIPAL_INFORMATION, ROUTE_REQUEST_AMBULANCE, ROUTE_SERVICE_INFO } from '../constanst/routue.constants';

const routes: Routes = [
  { path: '', component: HomeComponent, children: [
    {path: ROUTE_PRINCIPAL_INFORMATION, pathMatch: 'full', loadChildren: () => import('./principal-information/principal-information.module').then(m => m.PrincipalInformationModule)},
    {path: ROUTE_DOCTORS_SPECIALITIES, pathMatch: 'full', loadChildren: () => import('./doctors-specialities/doctors-specialities.module').then(m => m.DoctorsSpecialitiesModule)},
    {path: ROUTE_SERVICE_INFO, loadChildren: () => import('./medical-service-info/medical-service-info.module').then(m => m.MedicalServiceInfoModule)},
    {path: ROUTE_BLOG_INFO, loadChildren: () => import('./medical-blog-info/medical-blog-info.module').then(m => m.MedicalBlogInfoModule)},
    {path: ROUTE_PREADMISSION, pathMatch: 'full', loadChildren: () => import('./preadmission/preadmission.module').then(m => m.PreadmissionModule)},
    {path: ROUTE_REQUEST_AMBULANCE, pathMatch: 'full', loadChildren: () => import('./request-ambulance/request-ambulance.module').then(m => m.RequestAmbulanceModule)},
    {path: ROUTE_MEDICAL_DIGITAL, pathMatch: 'full', loadChildren: () => import('./medical-digital-info/medical-digital-info.module').then(m => m.MedicalDigitalInfoModule)},
    {path: ROUTE_HIGH_SPECIALTY_CENTERS, pathMatch: 'full', loadChildren: () => import('./high-specialty-centers/high-specialty-centers.module').then(m => m.HighSpecialtyCentersModule)}
  ]},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

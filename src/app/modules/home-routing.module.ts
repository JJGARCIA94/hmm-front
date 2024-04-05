import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ROUTE_DOCTORS_SPECIALITIES, ROUTE_PREADMISSION, ROUTE_PRINCIPAL_INFORMATION } from '../constanst/routue.constants';

const routes: Routes = [
  { path: '', component: HomeComponent, children: [
    {path: ROUTE_PRINCIPAL_INFORMATION, pathMatch: 'full', loadChildren: () => import('./principal-information/principal-information.module').then(m => m.PrincipalInformationModule)},
    {path: ROUTE_DOCTORS_SPECIALITIES, pathMatch: 'full', loadChildren: () => import('./doctors-specialities/doctors-specialities.module').then(m => m.DoctorsSpecialitiesModule)},
    {path: ROUTE_PREADMISSION, pathMatch: 'full', loadChildren: () => import('./preadmission/preadmission.module').then(m => m.PreadmissionModule)}
  ]},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

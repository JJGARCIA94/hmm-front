import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainInformationComponent } from '../../components/main-information/main-information.component';
import { SearchDoctorsComponent } from '../../components/search-doctors/search-doctors.component';
import { ImagesCarouselComponent } from '../../components/images-carousel/images-carousel.component';
import { PrincipalInformationComponent } from './principal-information.component';
import { RouterModule, Routes } from '@angular/router';
import { MedicalInfoComponent } from '../../components/medical-info/medical-info.component';
import { MedicalAreaComponent } from '../../components/medical-area/medical-area.component';
import { DigitalInfoComponent } from '../../components/digital-info/digital-info.component';
import { MedicalBlogComponent } from '../../components/medical-blog/medical-blog.component';
import { MedicalServicesComponent } from '../../components/medical-services/medical-services.component';

const routes: Routes = [
  { path: '', component: PrincipalInformationComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [PrincipalInformationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MainInformationComponent,
    SearchDoctorsComponent,
    ImagesCarouselComponent,
    MedicalServicesComponent,
    MedicalInfoComponent,
    MedicalAreaComponent,
    DigitalInfoComponent,
    MedicalBlogComponent
  ]
})
export class PrincipalInformationModule { }

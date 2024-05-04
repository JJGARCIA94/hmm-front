import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighSpecialtyCentersComponent } from './high-specialty-centers.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HighSpecialtyCentersComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [HighSpecialtyCentersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [HighSpecialtyCentersComponent]
})
export class HighSpecialtyCentersModule { }

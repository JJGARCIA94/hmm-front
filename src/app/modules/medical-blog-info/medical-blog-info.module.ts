import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicalBlogInfoComponent } from './medical-blog-info.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: MedicalBlogInfoComponent, pathMatch: 'full' },
  { path: ':id', component: MedicalBlogInfoComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [MedicalBlogInfoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [MedicalBlogInfoComponent]
})
export class MedicalBlogInfoModule { }

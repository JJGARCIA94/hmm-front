import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreadmissionComponent } from './preadmission.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: PreadmissionComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [PreadmissionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class PreadmissionModule { }

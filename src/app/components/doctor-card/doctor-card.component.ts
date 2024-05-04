import { Component, Input } from '@angular/core';
import { ISearchedDoctor } from '../../models/doctor.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-doctor-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './doctor-card.component.html',
  styleUrl: './doctor-card.component.scss'
})
export class DoctorCardComponent {
  @Input() doctor!: ISearchedDoctor;

  public toggleDetails(doctor: ISearchedDoctor): void {
    doctor.showDetails = !doctor.showDetails;
  }
}

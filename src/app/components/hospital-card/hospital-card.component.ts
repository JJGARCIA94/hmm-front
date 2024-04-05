import { Component, Input } from '@angular/core';
import { IHospital } from '../../models/hospital.model';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-hospital-card',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './hospital-card.component.html',
  styleUrl: './hospital-card.component.scss'
})
export class HospitalCardComponent {
  @Input() hospitalsInfo: IHospital[] = [];

  ngOnInit(): void {
  }
}

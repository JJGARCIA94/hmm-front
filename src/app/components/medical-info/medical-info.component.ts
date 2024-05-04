import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { ROUTE_HIGH_SPECIALTY_CENTERS } from '../../constanst/routue.constants';

@Component({
  selector: 'app-medical-info',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './medical-info.component.html',
  styleUrl: './medical-info.component.scss'
})
export class MedicalInfoComponent {
  constructor(private router: Router) {}

  public onSeeInformation(): void {
    this.router.navigate([`/${ROUTE_HIGH_SPECIALTY_CENTERS}`]);
  }
}

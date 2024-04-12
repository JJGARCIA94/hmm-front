import { Component } from '@angular/core';
import { IHospital } from '../../models/hospital.model';
import { HospitalCardComponent } from '../hospital-card/hospital-card.component';

@Component({
  selector: 'app-medical-area',
  standalone: true,
  imports: [HospitalCardComponent],
  templateUrl: './medical-area.component.html',
  styleUrl: './medical-area.component.scss'
})
export class MedicalAreaComponent {
  public hospitalsInfo: IHospital[] = [
    {id: 1, name: 'Hospital Marina Mazatlán', address: 'Av. Carlos Canseco 6048, La Marina, 82103, Mazatlán, Sinaloa.', phones: ['6692242230', '6699893336'], status: 1},
  ]
}

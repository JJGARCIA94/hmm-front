import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ISpeciality } from '../../models/speciality.model';

@Component({
  selector: 'app-medical-service-card',
  standalone: true,
  imports: [],
  templateUrl: './medical-service-card.component.html',
  styleUrl: './medical-service-card.component.scss'
})
export class MedicalServiceCardComponent {
  @Input() specialty!: ISpeciality;
  @Output() onSeeMoreEvent = new EventEmitter<number>();

  public onSeeMore(id: number): void {
    this.onSeeMoreEvent.emit(id);
  }
}

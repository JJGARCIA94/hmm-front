import { Component } from '@angular/core';
import { IMedicalDigital } from '../../models/medical-digital.model';

@Component({
  selector: 'app-medical-digital-info',
  templateUrl: './medical-digital-info.component.html',
  styleUrl: './medical-digital-info.component.scss'
})
export class MedicalDigitalInfoComponent {
  public medicalDigitalItems: IMedicalDigital[] = [
    { id: 1, img: 'assets/digital-info-steps/step1.PNG', description: 'Presione "Buscar servicios o médicos" para empezar una búsqueda.' },
    { id: 2, img: 'assets/digital-info-steps/step2.PNG', description: 'En el campo de buscar puede filtrar entre los servicios o doctores que le aparecen para posteriormente seleccionar uno de ellos.' },
    { id: 3, img: 'assets/digital-info-steps/step3.PNG', description: 'Una vez seleccionado el servicio o el doctor presiona "seleccionar".' },
    { id: 4, img: 'assets/digital-info-steps/step4.PNG', description: 'En el caso de seleccionar un doctor continue seleccionando el servicio que desee de ese doctor.' },
    { id: 5, img: 'assets/digital-info-steps/step5.PNG', description: 'Una vez seleccionado el servicio presione "Buscar".' },
    { id: 6, img: 'assets/digital-info-steps/step6.PNG', description: 'A continuación, seleccione el horario que más le parezca.' },
  ];
  public currentIndex: number = 0;

  constructor() {}

  public onNextItem(): void {
    if(this.currentIndex >= this.medicalDigitalItems.length - 1) {
      return;
    }

    this.currentIndex++;
  }

  public onPreviewItem(): void {
    if(this.currentIndex <= 0) {
      return;
    }

    this.currentIndex--;
  }
}

import { Component } from '@angular/core';
import { IHighSpecialtyCenters } from '../../models/specialty-centers.model';

@Component({
  selector: 'app-high-specialty-centers',
  templateUrl: './high-specialty-centers.component.html',
  styleUrl: './high-specialty-centers.component.scss'
})
export class HighSpecialtyCentersComponent {
  public highSpecialtyCentersItems: IHighSpecialtyCenters[] = [
    { id: 1, title: 'Centro de Oncología', img: 'assets/specialty-centers/centro-oncologia.jpg', description: 'El Centro de Oncología del Hospital Marina Mazatlán ofrece tratamientos avanzados para el cáncer, incluyendo radioterapia, quimioterapia y cirugía oncológica.' },
    { id: 2, title: 'Centro de Cardiología', img: 'assets/specialty-centers/centro-cardiologia.jpg', description: 'Nuestro Centro de Cardiología cuenta con tecnología de vanguardia para el diagnóstico y tratamiento de enfermedades cardíacas, incluyendo cateterismo cardíaco y cirugía de bypass.' },
    { id: 3, title: 'Centro de Neurología', img: 'assets/specialty-centers/centro-neurologia.jpg', description: 'En el Centro de Neurología, nuestro equipo de especialistas ofrece atención integral para trastornos neurológicos, como accidentes cerebrovasculares, epilepsia y enfermedad de Parkinson.' }
  ];

  constructor() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}

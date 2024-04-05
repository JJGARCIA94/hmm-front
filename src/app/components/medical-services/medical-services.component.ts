import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { IMedicalServiceItem } from '../../models/medical-services.model';
import { cardAnimation } from '../../utils/animations.util';
import { SpecialityService } from '../../services/speciality.service';
import { ISpeciality } from '../../models/speciality.model';


@Component({
  selector: 'app-medical-services',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './medical-services.component.html',
  styleUrl: './medical-services.component.scss',
  animations: [cardAnimation]
})
export class MedicalServicesComponent {
  public medicalServiceItem: IMedicalServiceItem[] = [
    { id: 1, image: 'assets/images/medical-area.jpeg', title: 'Fisioterapia y Rehabilitación', description: 'test 1', locations: 'Ciudad de México · Huixquilucan y 4 más' },
    { id: 2, image: 'assets/images/medical-area.jpeg', title: 'Fisioterapia y Rehabilitación', description: 'test 2', locations: 'Ciudad de México · Huixquilucan y 4 más' },
    { id: 3, image: 'assets/images/medical-area.jpeg', title: 'Fisioterapia y Rehabilitación', description: 'test 3', locations: 'Ciudad de México · Huixquilucan y 4 más' },
    { id: 4, image: 'assets/images/medical-area.jpeg', title: 'Fisioterapia y Rehabilitación', description: 'test 4', locations: 'Ciudad de México · Huixquilucan y 4 más' },
    { id: 5, image: 'assets/images/medical-area.jpeg', title: 'Fisioterapia y Rehabilitación', description: 'test 5', locations: 'Ciudad de México · Huixquilucan y 4 más' },
    { id: 6, image: 'assets/images/medical-area.jpeg', title: 'Fisioterapia y Rehabilitación', description: 'test 6', locations: 'Ciudad de México · Huixquilucan y 4 más' },
    { id: 7, image: 'assets/images/medical-area.jpeg', title: 'Fisioterapia y Rehabilitación', description: 'test 7', locations: 'Ciudad de México · Huixquilucan y 4 más' },
  ];
  public currentIndex: number = 0;
  public cardsOnDisplay: number = 0;
  public previousIndex: number = 0;
  public specialties: ISpeciality[] = [];

  constructor(private specialityService: SpecialityService) { }

  ngOnInit(): void {
    this.showWindowSize();

    this.specialityService.getSpecialties().subscribe(response => {
      this.specialties = response;
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.showWindowSize();
  }

  private showWindowSize() {
    const width = window.innerWidth;
    if (width < 768) {
      this.cardsOnDisplay = 1;
    } else if (width >= 768 && width < 1200) {
      this.cardsOnDisplay = 2;
    } else {
      this.cardsOnDisplay = 4;
    }
  }

  public nextSlide(): void {
    this.previousIndex = this.currentIndex;
    if ((this.currentIndex + 1) * this.cardsOnDisplay < this.specialties.length) {
      this.currentIndex++;
    }
  }

  public prevSlide(): void {
    this.previousIndex = this.currentIndex;
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}

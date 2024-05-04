import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { cardAnimation } from '../../utils/animations.util';
import { SpecialityService } from '../../services/speciality.service';
import { ISpeciality } from '../../models/speciality.model';
import { Router } from '@angular/router';
import { ROUTE_SERVICE_INFO } from '../../constanst/routue.constants';
import { MedicalServiceCardComponent } from '../medical-service-card/medical-service-card.component';


@Component({
  selector: 'app-medical-services',
  standalone: true,
  imports: [CommonModule, MatIconModule, MedicalServiceCardComponent],
  templateUrl: './medical-services.component.html',
  styleUrl: './medical-services.component.scss',
  animations: [cardAnimation]
})
export class MedicalServicesComponent {
  public currentIndex: number = 0;
  public cardsOnDisplay: number = 0;
  public previousIndex: number = 0;
  public specialties: ISpeciality[] = [];

  constructor(private specialityService: SpecialityService, private router: Router) { }

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

  public onSeeMore(idService: number = 0): void {
    const paramRouteService = idService === 0 ? '' : `/${idService}`;
    this.router.navigate([`/${ROUTE_SERVICE_INFO}${paramRouteService}`]);
  }
}

import { Component, HostListener, Input } from '@angular/core';
import { ICardCarouselItem } from '../../models/card-carousel.model';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards-carousel',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './cards-carousel.component.html',
  styleUrl: './cards-carousel.component.scss'
})
export class CardsCarouselComponent {
  @Input() cardCarouselItems: ICardCarouselItem[] = [];
  public currentIndex: number = 0;
  public displacement: number = 0;
  public cardsOnDisplay: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.showWindowSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.showWindowSize();
  }

  private showWindowSize() {
    const width = window.innerWidth;
    if (width < 768) {
      this.cardsOnDisplay = 1;
    } else if (width >= 768 && width < 992) {
      this.cardsOnDisplay = 2;
    } else if (width >= 992 && width < 1200) {
      this.cardsOnDisplay = 3;
    } else {
      this.cardsOnDisplay = 4;
    }
  }

  public nextSlide(): void {
    if (this.currentIndex < this.cardCarouselItems.length - this.cardsOnDisplay) {
      this.currentIndex++;
      const cardItem = document.getElementsByClassName('cards-carousel-items-container')[0] as HTMLElement;
      this.displacement -= cardItem.offsetWidth;
    }
  }

  public prevSlide(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      const cardItem = document.getElementsByClassName('cards-carousel-items-container')[0] as HTMLElement;
      this.displacement += cardItem.offsetWidth;
    }
  }
}

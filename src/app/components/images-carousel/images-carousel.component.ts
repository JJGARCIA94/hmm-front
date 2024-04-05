import { Component, Input } from '@angular/core';
import { IImagesCarouselItem } from '../../models/images-carousel.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-images-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './images-carousel.component.html',
  styleUrl: './images-carousel.component.scss'
})
export class ImagesCarouselComponent {
  @Input() images: IImagesCarouselItem[] = [
    { id: 1, image: 'assets/images/hacentrosur.jpg', title: '1', height: 550 },
    { id: 2, image: 'assets/images/hacentrosur.jpg', title: '2', height: 550 },
    { id: 3, image: 'assets/images/hacentrosur.jpg', title: '3', height: 550 },
  ];
  public currentIndex: number = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  public showImage(index: number): void {
    this.currentIndex = index;
  }

  public nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
}

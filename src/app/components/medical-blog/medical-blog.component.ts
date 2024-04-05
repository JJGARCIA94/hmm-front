import { Component } from '@angular/core';
import { ICardCarouselItem } from '../../models/card-carousel.model';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { CardsCarouselComponent } from '../cards-carousel/cards-carousel.component';


@Component({
  selector: 'app-medical-blog',
  standalone: true,
  imports: [CommonModule, MatIconModule, CardsCarouselComponent],
  templateUrl: './medical-blog.component.html',
  styleUrl: './medical-blog.component.scss'
})
export class MedicalBlogComponent {
  public cardCarouselItems: ICardCarouselItem[] = [
    { id: 1, image: 'assets/images/digital-info1.jpeg', title: 'test 1', description: 'test' },
    { id: 2, image: 'assets/images/digital-info1.jpeg', title: 'test 2', description: 'test' },
    { id: 3, image: 'assets/images/digital-info1.jpeg', title: 'test 3', description: 'test' },
    { id: 4, image: 'assets/images/digital-info1.jpeg', title: 'test 4', description: 'test' },
    { id: 5, image: 'assets/images/digital-info1.jpeg', title: 'test 5', description: 'test' },
    { id: 6, image: 'assets/images/digital-info1.jpeg', title: 'test 6', description: 'test' },
    { id: 7, image: 'assets/images/digital-info1.jpeg', title: 'test 7', description: 'test' },
    { id: 8, image: 'assets/images/digital-info1.jpeg', title: 'test 8', description: 'test' },
    { id: 9, image: 'assets/images/digital-info1.jpeg', title: 'test 9', description: 'test' },
  ];

  constructor() { }
}

import { Component } from '@angular/core';
import { ImagesCarouselComponent } from '../images-carousel/images-carousel.component';
import { IImagesCarouselItem } from '../../models/images-carousel.model';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-digital-info',
  standalone: true,
  imports: [ImagesCarouselComponent, MatIconModule],
  templateUrl: './digital-info.component.html',
  styleUrl: './digital-info.component.scss'
})
export class DigitalInfoComponent {
  public images: IImagesCarouselItem[] = [
    {id: 1, image: 'assets/images/digital-info1.jpeg', title: 'digital-info1', height: 500},
    {id: 2, image: 'assets/images/digital-info2.jpeg', title: 'digital-info2', height: 500},
    {id: 3, image: 'assets/images/digital-info3.jpeg', title: 'digital-info3', height: 500},
  ];
}

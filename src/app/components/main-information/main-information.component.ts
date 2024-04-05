import { Component } from '@angular/core';
import { ImagesCarouselComponent } from '../images-carousel/images-carousel.component';
import { IImagesCarouselItem } from '../../models/images-carousel.model';

@Component({
  selector: 'app-main-information',
  standalone: true,
  imports: [ImagesCarouselComponent],
  templateUrl: './main-information.component.html',
  styleUrl: './main-information.component.scss'
})
export class MainInformationComponent {
  public images: IImagesCarouselItem[] = [
    { id: 1, image: 'assets/images/main-information.jpeg', title: 'main-information1', className: 'img-fluid' },
    { id: 2, image: 'assets/images/main-information2.jpg', title: 'main-information2', className: 'img-fluid' },
    { id: 3, image: 'assets/images/main-information2.jpg', title: 'main-information3', className: 'img-fluid' },
  ];
}

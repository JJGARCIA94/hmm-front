import { Component, ElementRef } from '@angular/core';
import { IImagesCarouselItem } from '../../models/images-carousel.model';

@Component({
  selector: 'app-principal-information',
  templateUrl: './principal-information.component.html',
  styleUrl: './principal-information.component.scss'
})
export class PrincipalInformationComponent {
  public images: IImagesCarouselItem[] = [
    { id: 1, image: 'assets/images/caroucel-information4.PNG', title: 'caroucel-information1', height: 550 },
    { id: 2, image: 'assets/images/caroucel-information2.jpg', title: 'caroucel-information2', height: 550 },
    { id: 3, image: 'assets/images/caroucel-information3.jpg', title: 'caroucel-information3', height: 550 },
  ];
  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    /* // Obtén una referencia al elemento nativo del div usando ElementRef
    const divEspecifico: HTMLElement = this.elementRef.nativeElement.querySelector('#idDelDivEspecifico');

    // Crea el elemento iframe
    const iframe = document.createElement('iframe');
    iframe.id = 'mop_iframe';
    iframe.frameBorder = '0';
    iframe.name = 'mop_iframe';
    iframe.scrolling = 'no';
    iframe.style.marginLeft = '0px';
    iframe.style.width = '100%';
    iframe.style.height = 'inherit';
    iframe.style.border = '0px';

    // Agrega el iframe como hijo del div específico
    divEspecifico.appendChild(iframe);

    // Crea y agrega el primer script
    const script1 = document.createElement('script');
    script1.type = 'text/javascript';
    script1.text = `var mop_source = "https://app.tuotempo.com/mop/index.php?dbName=tt_hmarinam_prod&parent_location=http://localhost:4200/";`;
    divEspecifico.appendChild(script1);

    // Crea y agrega el segundo script
    const script2 = document.createElement('script');
    script2.type = 'text/javascript';
    script2.src = 'https://app.tuotempo.com/js/mop_loader.js.php';
    divEspecifico.appendChild(script2); */
  }
}

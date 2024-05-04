import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-medical-blog-info',
  templateUrl: './medical-blog-info.component.html',
  styleUrl: './medical-blog-info.component.scss'
})
export class MedicalBlogInfoComponent {
  public id: string = '';
  
  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id); // Verifica que estás recibiendo el id correctamente
    });
  }
}

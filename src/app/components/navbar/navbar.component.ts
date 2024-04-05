import { Component } from '@angular/core';
import { INavbarItem } from '../../models/navbar.model';
import { CommonModule } from '@angular/common';
import { ROUTE_DOCTORS_SPECIALITIES } from '../../constanst/routue.constants';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  public navbarItems: INavbarItem[] = [
    {id: 1, name: 'Directorio', route: ROUTE_DOCTORS_SPECIALITIES},
    {id: 2, name: 'Áreas de Especialidades', route: ROUTE_DOCTORS_SPECIALITIES},
    {id: 3, name: 'Menú', route: ROUTE_DOCTORS_SPECIALITIES},
  ];
}

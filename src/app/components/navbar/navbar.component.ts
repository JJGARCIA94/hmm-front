import { Component } from '@angular/core';
import { INavbarItem } from '../../models/navbar.model';
import { CommonModule } from '@angular/common';
import { ROUTE_DOCTORS_SPECIALITIES, ROUTE_HIGH_SPECIALTY_CENTERS, ROUTE_PRINCIPAL_INFORMATION } from '../../constanst/routue.constants';
import { Router } from '@angular/router';

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
    {id: 2, name: 'Áreas de Especialidades', route: ROUTE_HIGH_SPECIALTY_CENTERS},
    {id: 3, name: 'Inicio', route: ROUTE_PRINCIPAL_INFORMATION},
  ];

  constructor(private router: Router) {}

  public onGoToRoute(route: string = ROUTE_PRINCIPAL_INFORMATION): void {
    this.router.navigate([`/${route}`]);
  }
}

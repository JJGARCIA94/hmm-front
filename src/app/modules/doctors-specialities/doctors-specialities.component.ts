import { Component, ViewChild } from '@angular/core';
import { EventService } from '../../services/event.service';
import { EVENT_GET_DOCTORS_SEARCH } from '../../constanst/event.constant';
import { Subject, takeUntil } from 'rxjs';
import { DOCTOR_IMAGES_ROUTE } from '../../constanst/doctor.constants';
import { environment } from '../../environments/environment';
import { ISearchedDoctor } from '../../models/doctor.model';
import { SearchDoctorsComponent } from '../../components/search-doctors/search-doctors.component';

@Component({
  selector: 'app-doctors-specialities',
  templateUrl: './doctors-specialities.component.html',
  styleUrl: './doctors-specialities.component.scss'
})
export class DoctorsSpecialitiesComponent {
  @ViewChild(SearchDoctorsComponent) searchDoctorsComponent!: SearchDoctorsComponent;
  public doctors: ISearchedDoctor[] = [];
  public currentPage: number = 1;
  public itemsPerPage: number = 10;
  public totalRows: number = 0;
  public visible: boolean = true;
  private destroyerNotifier: Subject<void> = new Subject();

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.on(EVENT_GET_DOCTORS_SEARCH)
      .pipe(takeUntil(this.destroyerNotifier))
      .subscribe(
        (data) => {//todo: calcular todo lo de la paginacion aqui para que no se este renderizando a cada momento
          this.totalRows = data.data?.total || 0;
          data.data.result.forEach((item: ISearchedDoctor) => {
            item.image = item.image ? `${environment.apiURL}${DOCTOR_IMAGES_ROUTE}/${item.image}` : 'assets/doctors/default-doctor.png';
            item.showDetails = false;
          });
          this.doctors = data.data.result;
          this.eventService.complete();
        }
      );
  }

  public toggleDetails(doctor: ISearchedDoctor): void {
    doctor.showDetails = !doctor.showDetails;
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.searchDoctorsComponent.onSearchDoctors(this.currentPage);
  }

  totalPagesArray(): number[] {
    const totalPages = Math.ceil(this.totalRows / this.itemsPerPage);
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  totalPages(): number {
    return Math.ceil(this.totalRows / this.itemsPerPage);
  }

  visiblePages(): number[] {
    const total = this.totalPages();
    const current = this.currentPage;
    const pagesToShow = 5;
    
    console.log('Total de páginas:', total);
    console.log('Página actual:', current);
    
    let start = current - Math.floor(pagesToShow / 2);
    start = Math.max(1, start);
    //start = Math.min(total - pagesToShow + 1, start); // Asegúrate de que no exceda el total de páginas - páginas a mostrar + 1
    console.log('start:', start);
    const visiblePages: number[] = [];
    for (let i = start; i < start + pagesToShow && i <= total; i++) {
      visiblePages.push(i);
    }

    console.log('visiblePages:', visiblePages);
  
    this.visible = total > pagesToShow;
    
    return visiblePages;
  }
}

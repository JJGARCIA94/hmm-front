import { Component, Input } from '@angular/core';
import { EventService } from '../../services/event.service';
import { CommonModule } from '@angular/common';
import { EVENT_RESTART_PAGINATION } from '../../constanst/event.constant';
import { Subject, Subscription, takeUntil } from 'rxjs';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent {
  @Input() totalRows: number = 0;
  @Input() event: string = '';
  public currentPage: number = 1;
  public itemsPerPage: number = 10;
  private subscription!: Subscription;
  private destroyerNotifier: Subject<void> = new Subject();

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.subscription = this.eventService.on(EVENT_RESTART_PAGINATION)
      .pipe(takeUntil(this.destroyerNotifier))
      .subscribe(
        () => {
          this.currentPage = 1;
          this.eventService.complete();
        }
      );
  }

  //todo: deshabilitar paginas cuando se este haciendo una busqueda & mandar por input el event al que mandara la data para que pueda ser usado por cualquier componente;
  public onPageChange(page: number): void {
    this.currentPage = page;
    this.eventService.broadcast({ id: this.event, data: this.currentPage });
  }

  public totalPages(): number {
    return Math.ceil(this.totalRows / this.itemsPerPage);
  }

  public visiblePages(): number[] {
    const total = this.totalPages();
    const current = this.currentPage;
    const pagesToShow = 5;

    let start = current - Math.floor(pagesToShow / 2);
    start = Math.max(1, start);
    const visiblePages: number[] = [];

    for (let i = start; i < start + pagesToShow && i <= total; i++) {
      visiblePages.push(i);
    }

    return visiblePages;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

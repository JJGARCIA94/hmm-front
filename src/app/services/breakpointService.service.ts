import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreakpointService {
  private windowWidthSubject = new BehaviorSubject<number>(window.innerWidth);

  public windowWidth$: Observable<number> = this.windowWidthSubject.asObservable();

  constructor() {
    window.addEventListener('resize', () => {
      this.updateWindowWidth();
    });
  }

  private updateWindowWidth(): void {
    const width = window.innerWidth;
    this.windowWidthSubject.next(width);
  }
}
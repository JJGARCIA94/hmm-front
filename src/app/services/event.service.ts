import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, filter } from 'rxjs';
import { IEvent } from '../models/event.model';

@Injectable({
    providedIn: 'root'
})
export class EventService {
    private eventSubject: BehaviorSubject<IEvent> = new BehaviorSubject({} as IEvent);
    public on(id: string): Observable<IEvent> {
        return this.eventSubject.asObservable().pipe(
            filter(value => {
                return value.id === id;
            })
        );
    }

    public broadcast(event: IEvent) {
        this.eventSubject.next(event);
    }

    public complete() {
        this.eventSubject.next({} as IEvent);
    }
}
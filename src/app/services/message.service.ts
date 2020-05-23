import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {filter} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private messageSubject = new BehaviorSubject<string[]>([]);
  errors$: Observable<string[]> = this.messageSubject.asObservable().pipe(filter(messages => messages && messages.length > 0));

  constructor() { }

  emitMessage(...message: string[]) {
    this.messageSubject.next(message);
  }

}

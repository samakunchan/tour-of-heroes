import { Injectable } from '@angular/core';
import {Hero} from '../models/hero';
import {HEROES} from '../mock-heroes';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.emitMessage('HeroService: fetched heroes');
    return of<Hero[]>(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.emitMessage(`HeroService: fetched hero id = ${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}

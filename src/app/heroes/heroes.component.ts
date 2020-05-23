import {Component, OnInit} from '@angular/core';
import { Hero } from '../models/hero';
import {HeroService} from '../services/hero.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'sam-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes$: Observable<Hero[]>;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroes$ = this.heroService.getHeroes();
  }
}

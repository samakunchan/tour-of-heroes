import { Component, OnInit } from '@angular/core';
import {HeroService} from '../services/hero.service';
import {Observable} from 'rxjs';
import {Hero} from '../models/hero';
import { map } from 'rxjs/operators';

@Component({
  selector: 'sam-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  heroes$: Observable<Hero[]>;
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroes$ = this.heroService.getHeroes().pipe(
      map(hero => hero.slice(1, 5)),
    );
  }

}

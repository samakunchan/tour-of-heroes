import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Hero} from '../models/hero';
import {ActivatedRoute} from '@angular/router';
import {HeroService} from '../services/hero.service';
import { Location } from '@angular/common';

@Component({
  selector: 'sam-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  hero$: Observable<Hero>;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.hero$ = this.heroService.getHero(id);
  }

  onBack() {
    this.location.back();
  }
}

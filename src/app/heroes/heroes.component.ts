import { Component, OnInit } from '@angular/core';

import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`Hemos seleccionado el hero ${hero.name} con id: ${hero.id}.`)
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);

  }
}
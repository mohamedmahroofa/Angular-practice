import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroCardComponent } from './hero-card/hero-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hero-land';

  myHeroes = signal(['Batman', 'Superman', 'Martian Manhunter', 'Green Lantern', 'Captain Marvel', 'Blue Beetle']);

  addHero(name: string){
    if(name.trim() !== ''){
      this.myHeroes.update(heroes => [...heroes, name]);
    }
  }

  removeHero(heroToRemove: string){
    this.myHeroes.update(heroes => heroes.filter(h => h !== heroToRemove));
  }
}

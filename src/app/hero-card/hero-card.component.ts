import { Component, Input, Output, EventEmitter, signal } from '@angular/core';

@Component({
  selector: 'app-hero-card',
  standalone: true,
  imports: [],
  templateUrl: './hero-card.component.html',
  styleUrl: './hero-card.component.css'
})
export class HeroCardComponent {
  
  @Input() heroName: string = '';

  powerLevel = signal(0);

  @Output() fireHero = new EventEmitter<void>();

  increasePower(){
    this.powerLevel.update(oldValue => oldValue + 10);
  }

  onFireClick(){
    this.fireHero.emit();
  }

}

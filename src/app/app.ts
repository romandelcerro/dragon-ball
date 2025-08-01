import { Component, signal } from '@angular/core';
import { CharacterList } from './components/character-list/character-list';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [Header, CharacterList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('dragon-ball');
}

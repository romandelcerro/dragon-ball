import { Component, effect, inject } from '@angular/core';
import { DragonBallApi } from '../../services/dragon-ball-api.service';

@Component({
  selector: 'app-character-list',
  imports: [],
  templateUrl: './character-list.html',
  styleUrl: './character-list.css',
})
export class CharacterList {
  apiService = inject(DragonBallApi);

  constructor() {
    effect(() => {
      if (this.apiService.characters().length === 0) {
        this.apiService.fetchCharacters();
      }
    });
  }
}

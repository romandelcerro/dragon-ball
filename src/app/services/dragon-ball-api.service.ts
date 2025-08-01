import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Character } from '../models/character.model';

@Injectable({
  providedIn: 'root',
})
export class DragonBallApi {
  private apiUrl = '/api/characters';

  private http = inject(HttpClient);

  characters = signal<Character[]>([]);

  fetchCharacters() {
    this.http.get<{ items: Character[] }>(this.apiUrl).subscribe((data) => {
      this.characters.set(
        data.items.map((item) => new Character(item.id, item.name, item.image))
      );
    });
  }
}

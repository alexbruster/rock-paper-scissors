import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  getScores(player: string): string | null {
    return localStorage.getItem(player);
  }

  setScores(player: string, score: string) {
    localStorage.setItem(player, score);
  }
  
}

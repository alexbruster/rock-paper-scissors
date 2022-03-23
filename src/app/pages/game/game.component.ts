import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  name: string = '';
  savedScore: string | null = null;
  result: string = '';
  score: number = 0;
  playerChoice: string = '';
  botChoice: string = '';
  isLoading: boolean = false;
  
  options: string[] = ['rock', 'paper', 'scissors']

  constructor(
    private router: Router,
    private playerService: PlayerService
  ) { 
    this.name = this.router.getCurrentNavigation()?.extras.state?.name;
    this.savedScore = this.router.getCurrentNavigation()?.extras.state?.savedScore;
  }

  ngOnInit(): void { 
    if(this.savedScore) this.score = parseInt(this.savedScore);
  }

  onClick(userPlay: number) {
    this.botChoice = '';
    this.isLoading = true;
    this.playerChoice = this.options[userPlay];

    let botPlayNumber = this.randomBotPlay();
    this.botChoice = this.options[botPlayNumber];
    
    setTimeout(() => {
      this.isLoading = false;
      this.getResultOfTheGame(userPlay, botPlayNumber);
    }, 1000);
  }

  randomBotPlay(): number {
    return Math.floor(Math.random() * 3);
  }

  getResultOfTheGame(userPlay:number, botPlay: number) {
    if(userPlay === botPlay) {
      this.result = "It is a tie!!";
    } else if((userPlay - botPlay + 3) % 3 === 1) {
      this.result = "You win!!";
      this.score++;
      this.playerService.setScores(this.name, this.score.toString());
    } else {
      this.result = "You lose!!";
      this.score--;
      this.playerService.setScores(this.name, this.score.toString());
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name: string = '';

  constructor(
    private router: Router,
    private playerService: PlayerService
  ) { }

  ngOnInit(): void { }

  onSubmit() {
    if(this.name.length > 0) {
      let savedScore = this.playerService.getScores(this.name);
      this.router.navigate(['game'], {state: {name: this.name, savedScore: savedScore}});
    }
  }

}

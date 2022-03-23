import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    HomeComponent,
    GameComponent,
    NopagefoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ComponentsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  exports: [
    HomeComponent,
    GameComponent,
    NopagefoundComponent
  ]
})
export class PagesModule { }

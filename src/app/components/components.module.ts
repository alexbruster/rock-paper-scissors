import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class ComponentsModule { }

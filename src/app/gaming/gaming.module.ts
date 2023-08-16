import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamingRoutingModule } from './gaming-routing.module';
import { GamingComponent } from './gaming.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
import { GameControlComponent } from './game-control/game-control.component';



@NgModule({
  declarations: [
    GamingComponent,
    OddComponent,
    EvenComponent,
    GameControlComponent
  ],
  imports: [
    CommonModule,
    GamingRoutingModule,
    
  ]
})
export class GamingModule { }

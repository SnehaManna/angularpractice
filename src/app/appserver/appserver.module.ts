import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerelementComponent } from './serverelement/serverelement.component';
import { AppserverComponent } from './appserver.component';
import { FormsModule } from '@angular/forms';
import { AppServerRoutingModule } from './appserver-routing.module'

@NgModule({
  declarations: [
    CockpitComponent,
    ServerelementComponent,
    AppserverComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppServerRoutingModule
  ]
})
export class AppserverModule { }

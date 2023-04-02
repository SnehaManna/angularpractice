import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerelementComponent } from './serverelement/serverelement.component';
import { AppserverComponent } from './appserver.component';
import { FormsModule } from '@angular/forms';
import { AppServerRoutingModule } from './appserver-routing.module';
import { ChildComponent } from './child/child.component'

@NgModule({
  declarations: [
    CockpitComponent,
    ServerelementComponent,
    AppserverComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppServerRoutingModule
  ]
})
export class AppserverModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '@project/material.module';
import { BasicHighlightDirective } from './basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight.directive';



@NgModule({
  declarations: [
    HeaderComponent,
    BasicHighlightDirective,
    BetterHighlightDirective
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class SharedModule { }

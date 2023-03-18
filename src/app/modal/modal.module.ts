import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default/default.component';
import { MaterialModule } from '@project/material.module';

@NgModule({
  declarations: [DefaultComponent],
  entryComponents: [DefaultComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class ModalModule { }

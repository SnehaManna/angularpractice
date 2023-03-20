import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppserverComponent } from './appserver.component'
// import { AppserverModule } from './appserver.module';

const routes: Routes = [
  {
    path: '',
    component: AppserverComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppServerRoutingModule { }

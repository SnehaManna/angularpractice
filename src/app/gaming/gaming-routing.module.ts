import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamingComponent } from './gaming.component';
import { AdminGuard } from '@project/guard/admin.guard';

const routes: Routes = [
  {
    path:'',
    canActivateChild:[AdminGuard],
    children:[
      {
        path:'gaming',
        component:GamingComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamingRoutingModule { }

import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'recipe',
    component: RecipesComponent,
  },
  {
    path: 'shopping-list',
    component: ShoppinglistComponent,
  },
  {
    path: 'server',
    component: ServerComponent,
  },
  {
    path: 'servers',
    component: ServersComponent,
  },
]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

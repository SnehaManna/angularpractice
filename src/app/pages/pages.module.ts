import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '@project/shared/shared.module';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListsComponent } from './recipes/recipe-lists/recipe-lists.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { ShoppingeditComponent } from './shoppinglist/shoppingedit/shoppingedit.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { FormsModule } from '@angular/forms';
import { RecipeItemComponent } from './recipes/recipe-lists/recipe-item/recipe-item.component';
import { MainAccountComponent } from './main-account/main-account.component';
import { AccountComponent } from './main-account/account/account.component';
import { NewAccountComponent } from './main-account/new-account/new-account.component';
import { Hometask1Component } from './PracticeDada/hometask1/hometask1.component';


@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    RecipesComponent,
    RecipeListsComponent,
    RecipeDetailsComponent,
    ShoppinglistComponent,
    ShoppingeditComponent,
    ServerComponent,
    ServersComponent,
    RecipeItemComponent,
    MainAccountComponent,
    AccountComponent,
    NewAccountComponent,
    Hometask1Component,
   
  ],
  imports: [CommonModule, PagesRoutingModule, SharedModule, FormsModule],
})
export class PagesModule {}

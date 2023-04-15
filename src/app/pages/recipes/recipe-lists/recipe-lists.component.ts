import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.module';

@Component({
  selector: 'app-recipe-lists',
  templateUrl: './recipe-lists.component.html',
  styleUrls: ['./recipe-lists.component.scss'],
})
export class RecipeListsComponent implements OnInit {
  @Output() RecipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      
      'A test Recipe',
      'this is simple Recipe',
      'https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
    ),
    new Recipe(
      
      'A test Recipe again',
      'this is simple Recipe',
      'https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
  onSelectedRecipe(recipe:Recipe){
this.RecipeWasSelected.emit(recipe)
  }
}

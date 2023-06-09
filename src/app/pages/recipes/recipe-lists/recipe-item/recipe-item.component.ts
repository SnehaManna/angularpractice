import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.module';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
@Input() recipe? : Recipe;
@Output() receipeselected = new EventEmitter<void>()
  constructor() { }

  ngOnInit(): void {
  }
onSelected(){
this.receipeselected.emit();
}
}

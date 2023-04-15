import { Component, OnInit } from '@angular/core';
import { IngredientModule } from '@project/shared/ingredient/ingredient.module';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.scss']
})
export class ShoppinglistComponent implements OnInit {
ingredient:IngredientModule[]=[
  new IngredientModule("Apple",5),
  new IngredientModule("banana",15),
  new IngredientModule("grapes",8),
]
  constructor() { }

  ngOnInit(): void {
  }
  onIngredientAdded(ingredientt : IngredientModule){
this.ingredient.push(ingredientt);
  }
}

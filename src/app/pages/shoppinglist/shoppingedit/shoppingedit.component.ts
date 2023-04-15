import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { IngredientModule } from '@project/shared/ingredient/ingredient.module';

@Component({
  selector: 'app-shoppingedit',
  templateUrl: './shoppingedit.component.html',
  styleUrls: ['./shoppingedit.component.scss'],
})
export class ShoppingeditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef?: ElementRef;
  @ViewChild('amountInput') amountInputRef?: ElementRef;
  @Output() inputAdded = new EventEmitter<IngredientModule>();
  nameIngredient=""
  constructor() {}

  ngOnInit(): void {}
  onAddedfield() {
    const indName = this.nameInputRef?.nativeElement.value;
    const indAmount = this.amountInputRef?.nativeElement.value;
    const newInd = new IngredientModule(indName, indAmount);
    this.inputAdded.emit(newInd);
  }
}

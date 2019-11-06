import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  private ingredients: Ingredient[] = [new Ingredient('minced meat', 1),
    new Ingredient('onions', 2)];
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  getIngredients() {
   return this.ingredients.slice();
  }

  constructor() { }
}

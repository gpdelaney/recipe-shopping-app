import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  private ingredients: Ingredient[] = [new Ingredient('minced meat', 1),
    new Ingredient('onions', 2)];
  ingredientsChanged = new Subject<Ingredient[]>();

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  getIngredients() {
   return this.ingredients.slice();
  }

  constructor() { }
}

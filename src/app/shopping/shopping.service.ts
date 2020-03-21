import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient';
import {Subject} from 'rxjs';
import {NgForm} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  private ingredients: Ingredient[] = [new Ingredient('minced meat', 1),
    new Ingredient('onions', 2)];
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
      this.ingredients[index] = newIngredient;
      this.ingredientsChanged.next(this.ingredients.slice());
  }

  constructor() {
  }

  removeIngredient(index: number  ) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}

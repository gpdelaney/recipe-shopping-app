import {EventEmitter, Injectable, Output} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [new Recipe(1, 'Empanadas', 'Small pies filled with meat',
    'https://t1.rg.ltmcdn.com/es/images/5/8/4/img_empanadas_de_carne_cortada_a_cuchillo_7485_600.jpg',
    [new Ingredient('meat', 1), new Ingredient('tapas', 12)]),
    new Recipe(2, 'Lentil Stew', 'Hearty and delicious',
    'https://d2p4qauh5fa1j0.cloudfront.net/fotos/recetas/ampliacion/guiso_mlHzbf0x36N15kJwcY9tGUOayKXp4B.jpg',
    [new Ingredient('meat', 1), new Ingredient('lentil', 2),
      new Ingredient('chorizo', 1)])];
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() {
  }

  getRecipes() {
    return this.recipes.slice(); // returns  a new array
  }
  getRecipeById(id: number) {
    return this.recipes[id];
}
}

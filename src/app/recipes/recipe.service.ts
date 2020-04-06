import {Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [new Recipe(1, 'Empanadas', 'Small pies filled with meat',
    'https://t1.rg.ltmcdn.com/es/images/5/8/4/img_empanadas_de_carne_cortada_a_cuchillo_7485_600.jpg',
    [new Ingredient('meat', 1), new Ingredient('tapas', 12)]),
    new Recipe(2, 'Lentil Stew', 'Hearty and delicious',
      'https://www.lasrecetascocina.com/wp-content/uploads/2018/09/guiso-de-lentejas-con-chorizo.jpg',
      [new Ingredient('meat', 1), new Ingredient('lentil', 2),
        new Ingredient('chorizo', 1)])];

  constructor() {
  }

  getRecipes() {
    return this.recipes.slice(); // returns  a new array
  }

  getRecipeById(id: number) {
    return this.recipes[id];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(recipe: Recipe, id: number) {
    this.recipes[id] = recipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(id: number) {
    this.recipes.splice(id, 1);
    this.recipeChanged.next(this.recipes.slice());
  }
}

import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // tslint:disable-next-line:max-line-length
  recipes: Recipe[] = [new Recipe('Empanadas', 'Small pies filled with meat',
    'https://t1.rg.ltmcdn.com/es/images/5/8/4/img_empanadas_de_carne_cortada_a_cuchillo_7485_600.jpg')];
  @Output() recipeComponent = new EventEmitter<Recipe>();
  constructor() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeComponent.emit(recipe);
  }

  ngOnInit() {
  }

}

import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {Ingredient} from '../../shared/ingredient';
import {ShoppingService} from '../../shopping/shopping.service';
import {ActivatedRoute, Data, Params} from '@angular/router';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  paramName = 'id';
  id: number;

  constructor(private shoppingService: ShoppingService, private route: ActivatedRoute, private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params ) => {
      this.id = +params[this.paramName];
      this.recipe = this.recipeService.getRecipeById(this.id);
    });
  }

  sendToShoppingList(ingredient: Ingredient[]) {
    ingredient.forEach((ingredient1: Ingredient) => {
      this.shoppingService.addIngredient(ingredient1);
    });
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {Ingredient} from '../../shared/ingredient';
import {ShoppingService} from '../../shopping/shopping.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private shoppingService: ShoppingService) {
  }

  ngOnInit() {
  }

  sendToShoppingList(ingredient: Ingredient[]) {
    ingredient.forEach((ingredient1: Ingredient) => {
      this.shoppingService.addIngredient(ingredient1);
    });
  }

}

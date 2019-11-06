import {Component, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingredient';
import {ShoppingService} from './shopping.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  ingredients: Ingredient[];


  constructor(private shoppingService: ShoppingService) {
  }

  ngOnInit() {
    this.ingredients = this.shoppingService.getIngredients();
    this.shoppingService.ingredientsChanged.subscribe((ingredientsList: Ingredient[]) => {
      this.ingredients = ingredientsList;
    });
  }

  addIngredientToArray(ingredient: Ingredient) {
    this.shoppingService.addIngredient(ingredient);
  }

}

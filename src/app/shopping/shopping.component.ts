import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingredient';
import {ShoppingService} from './shopping.service';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private changeSubscription: Subscription;


  constructor(private shoppingService: ShoppingService) {
  }

  ngOnInit() {
    this.ingredients = this.shoppingService.getIngredients();
    this.changeSubscription = this.shoppingService.ingredientsChanged.subscribe((ingredientsList: Ingredient[]) => {
      this.ingredients = ingredientsList;
    });
  }
  // Good practice to always unsubscribe after the fact.
  ngOnDestroy(): void {
    this.changeSubscription.unsubscribe();
  }

}

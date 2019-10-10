import {Component, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingredient';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  ingredients: Ingredient[] = [new Ingredient('minced meat', 1),
    new Ingredient('onions', 2)];

  constructor() {
  }

  ngOnInit() {
  }

}

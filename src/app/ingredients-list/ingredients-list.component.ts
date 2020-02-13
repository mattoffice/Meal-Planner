import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

import { Ingredients } from '../Ingredients';
import { BasketService } from '../basket.service';

@Component({
  selector: 'app-ingredients-list',
  templateUrl: './ingredients-list.component.html',
  styleUrls: ['./ingredients-list.component.css']
})
export class IngredientsListComponent implements OnInit {

  initialCount: number = 0;
  ingredients: Ingredients[];
  selectedIngredients: Ingredients[];

  constructor(private basketService: BasketService) {
    
    this.ingredients = [{name:"Edamame", amount: 85, type:"Protein"}, {name:"Halloumi", amount: 35, type:"Protein"}, {name:"Chickpeas", amount:90, type:"Protein"},
  {name:"Paneer", amount: 35, type:"Paneer"}, {name:"Lentils", amount: 35, type:"Protein"}, {name:"Tinned beans", amount: 110, type:"Protein"}, {name:"Quorn mince", amount: 110, type:"Protein"},
  {name:"Vegetarian sausage", amount: 2, type:"Protein"}, {name:"Onion", amount: 1, type:"Vegetable"}, {name:"Mushroom", amount: 5, type:"Vegetable"}, 
  {name:"Aubergine", amount: 1, type:"Vegetable"}, {name:"Beetroot", amount: 5, type:"Vegetable"}];
   }

  ngOnInit(): void {
  }

  addToBasket(ingredient) {
    this.basketService.addToBasket(ingredient);
    this.selectedIngredients = this.basketService.getSelectedItems();
  }

}

import { Component, OnInit } from '@angular/core';
import { BasketService } from '../basket.service';
import { Ingredients } from '../Ingredients';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  recipes;

  filteredRecipes = [];

  constructor(private basketService: BasketService) {
    this.basketService.getRecipes()
    .subscribe((res: any) => {
      this.recipes = res;
      console.log(this.recipes);
    }, err => {
      console.log(err);
    });
   }

  ngOnInit(): void {
  }

  FilterTheRecipes() {
    this.filteredRecipes = this.basketService.FilterRecipes(this.recipes);
    console.log(this.filteredRecipes);
    }

  
}

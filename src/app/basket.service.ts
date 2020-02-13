import { Injectable } from '@angular/core';
import { IngredientsListComponent } from '../app/ingredients-list/ingredients-list.component';

import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Ingredients } from './Ingredients';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://localhost:4200/assets/recipes.json';


@Injectable({
  providedIn: 'root'
})
export class BasketService {
  filteredRecipes;

  selectedIngredients: Ingredients[];

  constructor(private http: HttpClient) { 
    this.selectedIngredients = [];
    this.filteredRecipes = [];
  }

  addToBasket(ingredient) {
    console.log('Add to basket function called');
    this.selectedIngredients.push(ingredient);
  }

  getSelectedItems() {
    return this.selectedIngredients;
  }

  clearBasket() {
    this.selectedIngredients = [];
    return this.selectedIngredients;
  }


  getRecipes(): Observable<any> {
    return this.http.get(apiUrl)
    .pipe(tap(recipe => console.log('fetched recipes'))
    );
  }

  FilterRecipes(recipes) {
      this.filteredRecipes = [];

      for(let r in recipes) {
        let count = 0;
        console.log(this.selectedIngredients);
        
        for (let s in this.selectedIngredients) {
        
          if (recipes[r].ingredients.includes(this.selectedIngredients[s].name)) { 
            
            count++; 
          }
      } 
      if (count >= 2) { this.filteredRecipes.push(recipes[r]) };  
    }
    return this.filteredRecipes;
  }
  


}

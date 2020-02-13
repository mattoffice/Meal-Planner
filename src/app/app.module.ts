import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RecipeComponent } from './recipe/recipe.component';
import { IngredientsListComponent } from './ingredients-list/ingredients-list.component';
import { SelectedIngredientsComponent } from './selected-ingredients/selected-ingredients.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    IngredientsListComponent,
    SelectedIngredientsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

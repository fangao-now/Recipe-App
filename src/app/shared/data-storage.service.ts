import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { AuthService } from '../auth/auth.service';
import { Recipe } from '../recipes/recipe.model';
import { map } from 'rxjs/operators';
import { Ingredient } from './ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService,
              private shoppingListService: ShoppingListService,
              private authService: AuthService) { }

  storeRecipes() {
    const token = this.authService.getoken();
    return this.httpClient.put('https://angular-exercise-database.firebaseio.com/recipes.json',
    this.recipeService.getRecipes());
  }

  getRecipes() {
    this.httpClient.get<Recipe[]>('https://angular-exercise-database.firebaseio.com/recipes.json').pipe(
    map(
      (recipes) => {
        for (const recipe of recipes) {
          if (!recipe.ingredients) {
            recipe.ingredients = [];
          }
        }
        return recipes;
      }
    ))
    .subscribe(
      (recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      }
    );
  }

  getShoppingList() {
    this.httpClient.get<Ingredient[]>('https://angular-exercise-database.firebaseio.com/shoppinglist.json').pipe(
    map(
      (ingredients) => {
        if (ingredients) {
          return ingredients;
        } else {
          return [];
        }
      }
    ))
    .subscribe(
      (ingredients: Ingredient[]) => {
        this.shoppingListService.setIngredients(ingredients);
      }
    );
  }

  storeShoppingList() {
    const token = this.authService.getoken();
    return this.httpClient.put('https://angular-exercise-database.firebaseio.com/shoppinglist.json?',
    this.shoppingListService.getIngredients());
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { AuthService } from '../auth/auth.service';
import { Recipe } from '../recipes/recipe.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthService) { }

  storeRecipes() {
    const token = this.authService.getoken();
    return this.httpClient.put('https://angular-exercise-database.firebaseio.com/recipes.json?auth=' + token,
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
}

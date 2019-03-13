import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: Http, private recipeService: RecipeService) { }

  storeRecipes() {
    return this.http.put('https://angular-exercise-database.firebaseio.com/recipes.json',
    this.recipeService.getRecipes());
  }

  getRecipes() {
    this.http.get('https://angular-exercise-database.firebaseio.com/recipes.json').subscribe(
      (response: Response) => {
        const recipes: Recipe[] = response.json();
        this.recipeService.setRecipes(recipes);
      }
    );
  }
}

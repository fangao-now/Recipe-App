import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Test Recipe 1', 'recipe 1 description', 'https://www.cbc.ca/food/content/images/recipes/CowboySteak.jpg', 
        [
            new Ingredient('Steak', 1),
            new Ingredient('Basil', 2)
        ]),
        new Recipe('Test Recipe 2', 'recipe 2 description', 'https://www.cbc.ca/food/content/images/recipes/CowboySteak.jpg', 
        [
            new Ingredient('Steak', 1),
            new Ingredient('Basil', 2)
        ])
    ];
    getRecipes() {
        // .slice() returns a new array instead of a reference to the original array in the service
        return this.recipes.slice();
    }


}

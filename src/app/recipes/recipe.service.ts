import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()

export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();
    private recipes: Recipe[] = [
        new Recipe('Test Recipe 1', 'recipe 1 description', 'https://www.cbc.ca/food/content/images/recipes/CowboySteak.jpg', 
        [
            new Ingredient('Steak', '1'),
            new Ingredient('Basil', '2')
        ]),
        new Recipe('Test Recipe 2', 'recipe 2 description', 'https://www.cbc.ca/food/content/images/recipes/CowboySteak.jpg', 
        [
            new Ingredient('Steak', '1'),
            new Ingredient('Basil', '2')
        ])
    ];

    constructor(private shoppingListService: ShoppingListService){}

    getRecipes() {
        // .slice() returns a new array instead of a reference to the original array in the service
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addMultipleIngredient(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}

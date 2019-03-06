import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService {
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
}

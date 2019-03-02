import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Test Recipe 1', 'recipe 1 description', 'https://www.cbc.ca/food/content/images/recipes/CowboySteak.jpg'),
    new Recipe('Test Recipe 2', 'recipe 2 description', 'https://www.cbc.ca/food/content/images/recipes/CowboySteak.jpg'),
new Recipe('Test Recipe 3', 'recipe 3 description', 'https://www.cbc.ca/food/content/images/recipes/CowboySteak.jpg')
];

  constructor() { }

  ngOnInit() {
  }

  onRecipeItemSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}

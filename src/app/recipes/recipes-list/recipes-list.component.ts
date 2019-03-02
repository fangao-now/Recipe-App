import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'Simply a test', 'https://www.cbc.ca/food/content/images/recipes/CowboySteak.jpg'),
    new Recipe('A Test Recipe', 'Simply a test', 'https://www.cbc.ca/food/content/images/recipes/CowboySteak.jpg'),
new Recipe('A Test Recipe', 'Simply a test', 'https://www.cbc.ca/food/content/images/recipes/CowboySteak.jpg')
];

  constructor() { }

  ngOnInit() {
  }

}

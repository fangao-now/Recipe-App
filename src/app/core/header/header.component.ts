import { Component } from '@angular/core';
import { DataStorageService } from '../../shared/data-storage.service';
import { AuthService } from '../../auth/auth.service';
import { Recipe } from 'src/app/recipes/recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private dataStorageService: DataStorageService,
              private authService: AuthService) {}

  onSaveData() {
    this.dataStorageService.storeRecipes().subscribe(
      (recipes: Recipe[]) => {
        console.log(recipes);
      }
    );

    this.dataStorageService.storeShoppingList().subscribe(
      (ingredients: Ingredient[]) => {
        console.log(ingredients);
      }
    );
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
    this.dataStorageService.getShoppingList();
  }

  onLogout() {
    this.authService.logoutUser();
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }
}

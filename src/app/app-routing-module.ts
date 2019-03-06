import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipesDetailsComponent } from './recipes/recipes-details/recipes-details.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'recipes', component: RecipesComponent, children: [
        { path: '', component: RecipeStartComponent },
        // order is important since if :id is in front, then angular will parse new as an id
        // thus won't able to resolve the /recipes/new
        { path: 'new', component: RecipeEditComponent },
        { path: ':id', component: RecipesDetailsComponent },
        { path: ':id/edit', component: RecipeEditComponent }
    ] },
    { path: 'shopping-list', component: ShoppingListComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
}
)

export class AppRoutingModule {
}

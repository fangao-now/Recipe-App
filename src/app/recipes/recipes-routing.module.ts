import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipesDetailsComponent } from './recipes-details/recipes-details.component';
import { AuthGuard } from '../auth/auth-guard.service';

const recipesRoutes: Routes = [{
    path: 'recipes', component: RecipesComponent, children: [{
        path: '', component: RecipeStartComponent
    },
    // order is important since if :id is in front, then angular will parse new as an id
    // thus won't able to resolve the /recipes/new
    { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] },
    { path: ':id', component: RecipesDetailsComponent },
    { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard] }
]}];

@NgModule({
    imports: [
        RouterModule.forChild(recipesRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class RecipesRoutingModule { }

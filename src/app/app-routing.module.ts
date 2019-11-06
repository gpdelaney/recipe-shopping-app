import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ShoppingComponent} from './shopping/shopping.component';
import {RecipesComponent} from './recipes/recipes.component';
import {RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';
import {RecipeStartComponent} from './recipes/recipe-start/recipe-start.component';


const routes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'shopping', component: ShoppingComponent},
  {
    path: 'recipes', component: RecipesComponent, children: [
      {path: '', component: RecipeStartComponent, pathMatch: 'full'},
      {path: ':id', component: RecipeDetailComponent}]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

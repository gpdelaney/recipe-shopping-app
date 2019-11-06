import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShoppingComponent} from './shopping/shopping.component';
import {RecipesComponent} from './recipes/recipes.component';


const routes: Routes = [
  {path: 'shopping', component: ShoppingComponent},
  {path: 'recipes', component: RecipesComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

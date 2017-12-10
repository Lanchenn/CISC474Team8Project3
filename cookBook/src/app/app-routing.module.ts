import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ViewsComponent} from './views/views.component';
import {HomeComponent} from './views/home/home.component';
import {RecipeComponent} from './views/recipe/recipe.component';
import {SigninComponent} from './views/signin/signin.component';
import {SignupComponent} from './views/signup/signup.component';


const routes: Routes = [
//  {path:'',redirectTo:'app',pathMatch:'full'},
  {path: '', redirectTo: 'views', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, pathMatch: 'full'},
  {path: 'recipe', component: RecipeComponent, pathMatch: 'full'},
  {path: 'signin', component: SigninComponent, pathMatch: 'full'},
  {path: 'signup', component: SignupComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

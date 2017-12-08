import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ViewsComponent} from './views/views.component';
import {HomeComponent} from './views/home/home.component';
import {RecipeComponent} from './views/recipe/recipe.component';
import {SigninComponent} from './views/signin/signin.component';
import {SignupComponent} from './views/signup/signup.component';


const routes: Routes = [
//  {path:'',redirectTo:'app',pathMatch:'full'},
  {path:'',redirectTo:'views',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'recipe',component:RecipeComponent},
  {path:'signin',component:SigninComponent},
  {path:'signup',component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import {BootstrapModalModule} from 'ng2-bootstrap-modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewsComponent } from './views/views.component';
import { ModulesComponent } from './modules/modules.component';
import { RecipeComponent } from './views/recipe/recipe.component';
import { HomeComponent } from './views/home/home.component';
import { SigninComponent } from './views/signin/signin.component';
import { SignupComponent } from './views/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewsComponent,
    ModulesComponent,
    RecipeComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    //BootstrapModalModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

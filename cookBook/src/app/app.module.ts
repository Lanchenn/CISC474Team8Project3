import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewsComponent } from './views/views.component';
import { ModulesComponent } from './modules/modules.component';
import { RecipeComponent } from './views/recipe/recipe.component';
import { HomeComponent } from './views/home/home.component';
import { SigninComponent } from './views/signin/signin.component';
import { SignupComponent } from './views/signup/signup.component';
import { ApiService } from './api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

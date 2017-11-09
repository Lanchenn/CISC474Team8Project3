import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewsComponent } from './views/views.component';
import { ModulesComponent } from './modules/modules.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewsComponent,
    ModulesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

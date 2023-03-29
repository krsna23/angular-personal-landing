import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './Home/content/content.component';


const routes: Routes = []

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
  ],
  exports: [ContentComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

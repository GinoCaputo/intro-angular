import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { Clase01Component } from './clases/clase01/clase01.component';
import { ClassOneComponent } from './clases/class-one/class-one.component';
@NgModule({
  declarations: [AppComponent, HeroesComponent, Clase01Component, ClassOneComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

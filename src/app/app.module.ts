import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MainMenuComponent } from './pages/main-menu/main-menu.component';
import { CardSuitRaceComponent } from './pages/card-suit-race/card-suit-race.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { KingsCupComponent } from './pages/kings-cup/kings-cup.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    CardSuitRaceComponent,
    NotFoundComponent,
    KingsCupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

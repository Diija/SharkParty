import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardSuitRaceComponent } from './pages/card-suit-race/card-suit-race.component';
import { KingsCupComponent } from './pages/kings-cup/kings-cup.component';
import { MainMenuComponent } from './pages/main-menu/main-menu.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {path: '', component: MainMenuComponent},
  {path: 'card-suit-race', component: CardSuitRaceComponent},
  {path: 'kings-cup', component: KingsCupComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', redirectTo: 'not-found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

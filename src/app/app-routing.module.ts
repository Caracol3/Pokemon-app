import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppComponent } from './app.component';
import { PokemonModule } from './pokemon/pokemon.module';

const routes: Routes = [
  { path: '', redirectTo: 'pokemons', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({ 
  declarations: [
    AppComponent,PageNotFoundComponent],
  imports: [
    PokemonModule,
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

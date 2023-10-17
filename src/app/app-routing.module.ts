// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })
// export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // gives the app routing capability

import { HeroesComponent } from './heroes/heroes.component'; // gives the Router somewhere to go once you configure the routes
import { DashboardComponent } from './dashboard/dashboard.component'; // dashboard
import { HeroDetailComponent } from './hero-detail/hero-detail.component'; // hero details


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent }, // path + component(that the router) => something like, localhost:4200/heroes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // The following line adds the RouterModule to the AppRoutingModule imports array and configures it with the routes in one step by calling RouterModule.forRoot():
  exports: [RouterModule] // Next, AppRoutingModule exports RouterModule to be available throughout the application.

})
export class AppRoutingModule { }

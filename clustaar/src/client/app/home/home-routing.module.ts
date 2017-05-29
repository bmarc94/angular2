import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../shared/authentication/auth-guard';
import { HomeComponent } from './home.component';






@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'home', component: HomeComponent, canActivate:[AuthGuard]}
    ])
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
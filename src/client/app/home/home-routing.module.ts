import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { AuthGuard } from '../shared/authentication/authentication-guard'

@NgModule({
  imports: [
    RouterModule.forChild([
     { path: '', component: HomeComponent, canActivate:[AuthGuard]}
    ])
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
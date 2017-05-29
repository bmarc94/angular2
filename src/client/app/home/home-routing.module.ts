import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';






@NgModule({
  imports: [
    RouterModule.forChild([
     { path: '', component: HomeComponent}
    ])
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { ToolbarComponent } from './shared/toolbar/toolbar.component';




@NgModule({
  imports: [
    RouterModule.forRoot([
      //{ path: '',   redirectTo: '/home', pathMatch: 'full' },
    ])
  ],
  exports: [RouterModule]
})


export class AppRoutingModule { }




import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [HomeRoutingModule, FormsModule,CommonModule],
  declarations: [HomeComponent],
  exports: [],
  providers: []
})
export class HomeModule { }
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.modules';


@NgModule({
  imports: [HomeRoutingModule, FormsModule, SharedModule],
  declarations: [HomeComponent],
  exports: [],
  providers: []
})
export class HomeModule { }
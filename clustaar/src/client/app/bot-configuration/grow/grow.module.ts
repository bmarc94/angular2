import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GrowComponent } from './grow.component';
import { GrowRoutingModule } from './grow-routing.module';


@NgModule({
  imports: [CommonModule, GrowRoutingModule],
  declarations: [GrowComponent],
  exports: [GrowComponent]
})
export class GrowModule { }

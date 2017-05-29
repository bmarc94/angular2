import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BroadcastComponent } from './broadcast.component';
import { BroadcastRoutingModule } from './broadcast-routing.module';


@NgModule({
  imports: [CommonModule, BroadcastRoutingModule],
  declarations: [BroadcastComponent],
  exports: [BroadcastComponent]
})
export class BroadcastModule { }

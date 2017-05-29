import { NgModule } from '@angular/core';

import { BroadcastComponent } from './broadcast.component';
import { BroadcastRoutingModule } from './broadcast-routing.module';

@NgModule({
  imports: [BroadcastRoutingModule],
  declarations: [BroadcastComponent],
  exports: [BroadcastComponent]
})

export class BroadcastModule { }

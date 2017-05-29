import { NgModule } from '@angular/core';

import { GrowComponent } from './grow.component';
import { GrowRoutingModule } from './grow-routing.module';

@NgModule({
  imports: [GrowRoutingModule],
  declarations: [GrowComponent],
  exports: [GrowComponent]
})

export class GrowModule { }

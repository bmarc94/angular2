import { NgModule } from '@angular/core';

import { BuildComponent } from './build.component';
import { BuildRoutingModule } from './build-routing.module';
//import { LayoutComponent } from '../layout/layout.component';

@NgModule({
  imports: [BuildRoutingModule],
  declarations: [BuildComponent],
  exports: [BuildComponent]
})

export class BuildModule { }

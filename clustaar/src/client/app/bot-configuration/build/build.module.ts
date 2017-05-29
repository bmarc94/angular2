import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuildComponent } from './build.component';
import { BuildRoutingModule } from './build-routing.module';
import { LayoutComponent } from '../layout/layout.component';


@NgModule({
  imports: [CommonModule, BuildRoutingModule],
  declarations: [BuildComponent,LayoutComponent],
  exports: [BuildComponent]
})
export class BuildModule { }

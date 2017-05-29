import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalyzeComponent } from './analyze.component';
import { AnalyzeRoutingModule } from './analyze-routing.module';



@NgModule({
  imports: [CommonModule, AnalyzeRoutingModule],
  declarations: [AnalyzeComponent],
  exports: [AnalyzeComponent]
})
export class AnalyzeModule { }

import { NgModule } from '@angular/core';

import { AnalyzeComponent } from './analyze.component';
import { AnalyzeRoutingModule } from './analyze-routing.module';

@NgModule({
  imports: [AnalyzeRoutingModule],
  declarations: [AnalyzeComponent],
  exports: [AnalyzeComponent]
})
export class AnalyzeModule { }

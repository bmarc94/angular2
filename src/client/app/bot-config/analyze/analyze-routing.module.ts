import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AnalyzeComponent } from './analyze.component';

import { LayoutComponent } from '../layout/layout.component';



@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '', component: LayoutComponent, children: [
          { path: 'analyze', component: AnalyzeComponent },
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class AnalyzeRoutingModule { }

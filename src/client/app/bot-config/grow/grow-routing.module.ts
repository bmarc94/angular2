import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GrowComponent } from './grow.component';

import { LayoutComponent } from '../layout/layout.component';



@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '', component: LayoutComponent, children: [
          { path: 'grow', component: GrowComponent },
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class GrowRoutingModule { }
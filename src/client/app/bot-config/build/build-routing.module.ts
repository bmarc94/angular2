import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BuildComponent } from './build.component';

import { LayoutComponent } from '../layout/layout.component';



@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '', component: LayoutComponent, children: [
          { path: 'build', component: BuildComponent },
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class BuildRoutingModule { }
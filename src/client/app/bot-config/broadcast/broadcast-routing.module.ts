import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BroadcastComponent } from './broadcast.component';

import { LayoutComponent } from '../layout/layout.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '', component: LayoutComponent, children: [
          { path: 'broadcast', component: BroadcastComponent },
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class BroadcastRoutingModule { }
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BroadcastComponent } from './broadcast.component';
import { LayoutComponent } from '../layout/layout.component';
import { AuthGuard } from '../../shared/authentication/authentication-guard'

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '', component: LayoutComponent, canActivate:[AuthGuard], children: [
          { path: 'broadcast', component: BroadcastComponent },
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class BroadcastRoutingModule { }
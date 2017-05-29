import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AnalyzeComponent } from './analyze.component';

import { LayoutComponent } from '../layout/layout.component';
import { AuthGuard } from '../../shared/authentication/auth-guard';


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '', component: LayoutComponent, children: [
          { path: 'analyze', component: AnalyzeComponent, canActivate: [AuthGuard] },
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class AnalyzeRoutingModule { }

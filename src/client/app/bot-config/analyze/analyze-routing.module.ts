import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AnalyzeComponent } from './analyze.component';
import { LayoutComponent } from '../layout/layout.component';

import { AuthGuard } from '../../shared/authentication/authentication-guard'



@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '', component: LayoutComponent, canActivate:[AuthGuard], children: [
          { path: 'analyze', component: AnalyzeComponent },
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class AnalyzeRoutingModule { }

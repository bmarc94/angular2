import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AiSetupComponent } from './ai-setup.component';
import { LayoutComponent } from '../layout/layout.component';
import { AuthGuard } from '../../shared/authentication/authentication-guard'


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '', component: LayoutComponent,  canActivate:[AuthGuard], children: [
          { path: 'ai-setup', component: AiSetupComponent },
        ]
      }
    ])
  ],
  exports: [RouterModule]
})

export class AiSetupRoutingModule { }
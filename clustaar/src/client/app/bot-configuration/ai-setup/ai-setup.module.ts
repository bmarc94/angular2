import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AiSetupComponent } from './ai-setup.component';
import { AiSetupRoutingModule } from './ai-setup-routing.module';


@NgModule({
  imports: [CommonModule, AiSetupRoutingModule],
  declarations: [AiSetupComponent],
  exports: [AiSetupComponent]
})
export class AiSetupModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigureComponent } from './configure.component';
import { ConfigureRoutingModule } from './configure-routing.module';


@NgModule({
  imports: [CommonModule, ConfigureRoutingModule],
  declarations: [ConfigureComponent],
  exports: [ConfigureComponent]
})
export class ConfigureModule { }

import { NgModule } from '@angular/core';

import { ConfigureComponent } from './configure.component';
import { ConfigureRoutingModule } from './configure-routing.module';

@NgModule({
  imports: [ConfigureRoutingModule],
  declarations: [ConfigureComponent],
  exports: [ConfigureComponent]
})

export class ConfigureModule { }

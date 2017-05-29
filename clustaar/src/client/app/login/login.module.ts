import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from '../shared/shared.module';

import { MessageComponenent } from '../shared/message/message.component';
import { MessageService } from '../shared/message/message.service';
import { AuthenticationService } from '../shared/authentication/authentication.service';


@NgModule({
  imports: [LoginRoutingModule, SharedModule],
  declarations: [LoginComponent, MessageComponenent],
  exports: [LoginComponent],
  providers: [MessageService,AuthenticationService]
})
export class LoginModule { }


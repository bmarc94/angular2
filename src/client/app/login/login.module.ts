import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { AuthenticationService } from '../shared/authentication/authentication.service';

@NgModule({
  imports: [ FormsModule, LoginRoutingModule],
  declarations: [LoginComponent],
  exports: [LoginComponent],
  providers: [AuthenticationService]
})

export class LoginModule { }


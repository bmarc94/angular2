import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { AuthenticationService } from '../shared/authentication/authentication.service';
import { SharedModule } from '../shared/shared.modules';



@NgModule({
  imports: [ FormsModule, LoginRoutingModule,SharedModule],
  declarations: [LoginComponent],
  exports: [LoginComponent],
  providers: [AuthenticationService]
})

export class LoginModule { }


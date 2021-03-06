import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomeModule } from './home/home.module';
import { BotConfigModule } from './bot-config/bot-config.module';
import { LoginModule } from './login/login.module';
import { AuthGuard } from './shared/authentication/authentication-guard'
import { MessageService } from './shared/message/message.service';





@NgModule({
  imports: [
    BrowserModule,
    HttpModule, 
    AppRoutingModule,

    HomeModule,
    LoginModule,
    BotConfigModule
    ],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>',
  },
  AuthGuard],
  bootstrap: [AppComponent]

})
export class AppModule { }

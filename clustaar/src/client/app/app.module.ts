import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';





import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { BotConfigurationModule } from './bot-configuration/bot-configuration.module';
//import { LayoutComponent } from './bot-configuration/layout/layout.component';

import { SharedModule } from './shared/shared.module';
import { AuthGuard } from './shared/authentication/auth-guard';


@NgModule({
  imports: [BrowserModule,
    HttpModule, 
    AppRoutingModule, 

    BotConfigurationModule,
    
    
    //LayoutComponent,
    HomeModule,
    LoginModule,
    SharedModule.forRoot()],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>',
  },AuthGuard],
  bootstrap: [AppComponent]

})
export class AppModule { }

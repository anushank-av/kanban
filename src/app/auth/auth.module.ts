import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { SharedModule } from '../shared/shared.module';
import { GoogleSigninDirective } from './google-signin.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { EmailLoginComponent } from './email-login/email-login.component';


@NgModule({
  declarations: [
    LoginPageComponent, 
    EmailLoginComponent,
    GoogleSigninDirective],
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }

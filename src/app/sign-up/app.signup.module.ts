import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import {HttpClientModule, HTTP_INTERCEPTORS, HttpClientXsrfModule} from '@angular/common/http'
import { UserService } from '../User/app.user.service';
import { SignUpRootComponent } from './app.signup.component';


@NgModule({
  declarations: [
    SignUpRootComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  exports: [SignUpRootComponent]
})

export class SignUpModule { }

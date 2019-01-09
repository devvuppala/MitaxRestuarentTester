import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import {HttpClientModule, HTTP_INTERCEPTORS, HttpClientXsrfModule} from '@angular/common/http'
import { UserRootComponent } from './app.user.root.component';
import { UserService } from './app.user.service';
import { TokenInterceptor } from './app.user.service.interceptor';
import { UserPasswordValidator } from './app.user.password.validation';
import { UsernameValidator } from './app.user.username.validation';
import { UniqueEmailAsyncValidation } from './app.email.asyn.validator';
import { Routes, RouterModule } from '@angular/router';
import { UserItemComponent } from './app.user-item.component';

const userRoots: Routes = [
  {path:'currentUser/:userID', component: UserItemComponent},
  {path:'currentUser', component: UserItemComponent}
]

@NgModule({
  declarations: [
    UserRootComponent, UserPasswordValidator, UsernameValidator, UniqueEmailAsyncValidation, UserItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(userRoots),
    HttpClientXsrfModule.withOptions({
        cookieName: 'appSec',
        headerName: 'My-Xsrf-Header',
      }),
  ],
  providers: [UserService , {
    provide: HTTP_INTERCEPTORS,
    useClass : TokenInterceptor,
    multi: true
  }],
  exports: [UserRootComponent]
})

export class UserModule { }

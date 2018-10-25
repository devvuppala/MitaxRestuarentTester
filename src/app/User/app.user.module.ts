import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import {HttpClientModule, HTTP_INTERCEPTORS, HttpClientXsrfModule} from '@angular/common/http'
import { UserRootComponent } from './app.user.root.component';
import { UserService } from './app.user.service';
import { TokenInterceptor } from './app.user.service.interceptor';


@NgModule({
  declarations: [
    UserRootComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
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

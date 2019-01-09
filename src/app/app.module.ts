import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import {HttpClientModule} from '@angular/common/http'
import {RouterModule, Routes} from '@angular/router'

import { AppComponent } from './app.component';
import { MenuModule } from './Menu/app.menu.module';
import { TempModule } from './Temp/app.test.module';
import { AdvertisementModule } from './advertisement/app.advertisement.module';
import { BookModule } from './Books/app.book.module';
import { UserModule } from './User/app.user.module';
import { ErrorService } from './app.error.service';
import { HttpErrorHandler } from './app.error.handler';
import { SignUpModule } from './sign-up/app.signup.module';
import { LoginModule } from './login/app.login.module';
import { LoginComponent } from './login/app.login.component';
import { SignUpRootComponent } from './sign-up/app.signup.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './app.page-not-found-component';
import { TesterComponent } from './tester/tester.component';


@NgModule({
  declarations: [
    AppComponent, PageNotFoundComponent, TesterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    MenuModule,
    TempModule,
    AdvertisementModule,
    BookModule,
    UserModule,
    SignUpModule,
    LoginModule,
    AppRoutingModule
  ],
  providers: [
    ErrorService,
    HttpErrorHandler],
  bootstrap: [AppComponent]
})
export class AppModule { }

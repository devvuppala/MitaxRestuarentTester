import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { MenuModule } from './Menu/app.menu.module';
import { TempModule } from './Temp/app.test.module';
import { AdvertisementModule } from './advertisement/app.advertisement.module';
import { BookModule } from './Books/app.book.module';
import { UserModule } from './User/app.user.module';
import { ErrorService } from './app.error.service';
import { HttpErrorHandler } from './app.error.handler';
import { SignUpModule } from './sign-up/app.signup.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MenuModule,
    TempModule,
    AdvertisementModule,
    BookModule,
    UserModule,
    SignUpModule
  ],
  providers: [
    ErrorService,
    HttpErrorHandler],
  bootstrap: [AppComponent]
})
export class AppModule { }

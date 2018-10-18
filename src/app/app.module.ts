import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { MenuModule } from './Menu/app.menu.module';
import { TempModule } from './Temp/app.test.module';
import { AdvertisementModule } from './advertisement/app.advertisement.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MenuModule,
    TempModule,
    AdvertisementModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

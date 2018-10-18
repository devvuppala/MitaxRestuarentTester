import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AdvertisementChildComponent } from './app.add.dynamic.component';
import { AdvertisementComponent } from './app.advertisement.component';
import { AdService } from './app.ad.service';

@NgModule({
  declarations: [
    AdvertisementComponent, AdvertisementChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [AdService],
  exports:[AdvertisementComponent],
  entryComponents:[AdvertisementChildComponent]
})

export class AdvertisementModule { }

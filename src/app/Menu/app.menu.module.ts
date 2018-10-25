import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { MenuComponent } from './app.menu.component';
import { MenuItemComponent } from './app.menu.item.component';
import { MenuCartItemComponent } from './app.menu.cart.component';
import { priceDirective } from './app.menu.pricevalidator.directive';
import { NgNotIfDirective } from './app.not-ngif.directive';
import { MyCurrencyConvertor } from './app.menu.myCurrencyConverter.pipe';
import { MyFilterPipe } from './app.menu.filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { MenuService } from './app.menu.service';

@NgModule({
  declarations: [
    MenuComponent, MenuItemComponent, MenuCartItemComponent, 
    priceDirective, NgNotIfDirective, 
    MyCurrencyConvertor , MyFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MenuService],
  exports:[MenuComponent]
})

export class MenuModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { MenuComponent } from './app.menu.component';
import { MenuItemComponent } from './app.menu.item.component';
import { MenuCartItemComponent } from './app.menu.cart.component';

@NgModule({
  declarations: [
    MenuComponent, MenuItemComponent, MenuCartItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  exports:[MenuComponent]
})

export class MenuModule { }

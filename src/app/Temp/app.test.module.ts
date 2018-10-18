import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { TempParentComponent } from './app.test.parent.component';
import { TempChildComponent } from './app.test.child.component';
@NgModule({
  declarations: [
    TempParentComponent, TempChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  exports:[TempParentComponent]
})

export class TempModule { }

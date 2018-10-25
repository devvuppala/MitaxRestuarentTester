import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { BooksRootComponent } from './app.book.root.component';
import { BookService } from './services/app.book.service';
import { BookComponent } from './app.book.component';

@NgModule({
  declarations: [
    BooksRootComponent, BookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [BookService],
  exports:[BooksRootComponent]
})

export class BookModule { }

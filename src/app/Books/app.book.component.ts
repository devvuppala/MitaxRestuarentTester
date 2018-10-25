import { Component, OnInit, Input } from "@angular/core";
import { BookService } from "./services/app.book.service";
import { Book } from "./models/app.book.model";

@Component({
    selector: 'single-book',
    template: `
    <div class="row">
        <div class="col-sm-3"><img [src]="book.imageSrc" [alt]="book.name" class="img-thumbnail"></div>
        <div class="col-sm-3">
            <b class="bookTitle">{{book.name}} </b> <br> 
            <i class="bookwriter">{{book.author}}</i> <br> 
            <i class="bookIsbn">{{book.isbn}}</i>
        </div>
        <div class="col-sm-3"> {{book.price}}</div>
    </div>
    
    
   
    
    
    `,
    styleUrls: ['./app.book.root.component.scss']
  })
  
  
  export class BookComponent{
    
    @Input() book: Book;

  }
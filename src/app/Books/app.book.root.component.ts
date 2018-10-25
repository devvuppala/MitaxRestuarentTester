import { Component, OnInit } from "@angular/core";
import { BookService } from "./services/app.book.service";
import { Book } from "./models/app.book.model";

@Component({
    selector: 'book-root',
    templateUrl: './app.book.root.component.html',
    styleUrls: ['./app.book.root.component.scss']
  })
  
  
  export class BooksRootComponent implements OnInit {

    books: Book[] = [];

    constructor(private bookService: BookService) {

        //Inject services here
    }

    ngOnInit() {
        //Retrive the Books here
        this.bookService.getBooksList().subscribe((books: Book[]) => {
            this.books = books;
        })
    }
  }
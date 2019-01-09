import { Component, OnInit } from '@angular/core';
import { TesterServiceService } from './tester-service.service';
import { BookForTest } from './tester.model.service';

@Component({
  selector: 'app-tester',
  templateUrl: './tester.component.html',
  styleUrls: ['./tester.component.css']
})
export class TesterComponent implements OnInit {

  books: BookForTest[];
  booksfound: boolean = false;
  asyncData: string;

  constructor(private testerService : TesterServiceService) { }

  ngOnInit() {
    this.books = this.testerService.getBooks();
    //this.booksfound = this.books.length > 0 ? true : false;
    this.testerService.getDataAsynchr().then((dataReturned: string) => this.asyncData = dataReturned) 
  }

}

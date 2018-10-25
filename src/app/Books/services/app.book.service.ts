import { Observable } from "rxjs";
import { Book } from "../models/app.book.model";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

const JSON_SERVER =  'http://localhost:3000';

@Injectable()
export class BookService {

    constructor(private http: HttpClient) {

    }

    getBooksList() : Observable<Book[]> {
        return this.http.get<Book[]>(JSON_SERVER + '/books');
    }

}
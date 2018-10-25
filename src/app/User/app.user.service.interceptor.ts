import { Injectable } from '@angular/core';
import {  HttpRequest,  HttpHandler,  HttpEvent,  HttpInterceptor, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './app.user.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    httpOptions;
  constructor(public auth: UserService) {
        this.httpOptions = {
            headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'Authorization': 'my-auth-token'
            })
        };
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("param: " + request.params);
    console.log("Request Made at " + new Date() + " :::: " + request.urlWithParams)
    return next.handle(request);
  }
}
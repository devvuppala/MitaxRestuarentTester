
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { ErrorService } from './app.error.service';
 
export type HandleError = <T> (operation?: string, result?: T) => (error: HttpErrorResponse) => Observable<T>;
 
/** Handles HttpClient errors */
@Injectable()
export class HttpErrorHandler {
 
  constructor(private errorService: ErrorService) { }
 
  /** Create handleError function that already knows the service name */
  createHandleError = (serviceName = '') => <T>
    (operation = 'operation', result = {} as T) => this.handleError(serviceName, operation, result);
 
  /**
   * @param serviceName: name of the data service
   * @param operation: name of the failed operation
   * @param result: optional value to return as the observable result
   */
  handleError<T> (serviceName = '', operation = 'operation', result = {} as T) {
 
    return (error: HttpErrorResponse): Observable<T> => {
      // Todo -> Send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      const message = (error.error instanceof ErrorEvent) ?
        error.error.message :
       `{error code: ${error.status}, body: "${error.message}"}`;
	   
      // -> Return a safe result.
      return of( result );
    };
  }
}
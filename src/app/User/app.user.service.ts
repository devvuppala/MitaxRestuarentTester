import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpInterceptor, HttpHandler, HttpEvent , HttpRequest, HttpErrorResponse} from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, retry, map, tap , last, debounceTime, distinctUntilChanged} from 'rxjs/operators';
import { User } from "./app.user.model";
import { HandleError, HttpErrorHandler } from "../app.error.handler";

const user_api = "https://webdev-mintex.herokuapp.com/api";
const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

@Injectable()
export class UserService {

    private handleError: HandleError;
    constructor(private http: HttpClient, private httpErrorHandler : HttpErrorHandler) {
        this.handleError = httpErrorHandler.createHandleError('UserService');
    }

    getAllUsers() : Observable<User[]> {
       return this.http.get<User[]>(user_api + "/user").pipe(
        map(event => event),
        tap(message => console.log(message)),
        last() // return last (completed) message to caller
      );
    }

    addTheUser(newUser: User) : Observable<User> { 
        return this.http.post<User>(user_api + '/userseeqwewqe', newUser,httpOptions).pipe(
            retry(3),
            catchError(this.handleError('addNewUser',null))
        )
    }

    deleteUser(user: User) : Observable<User> { 
        return this.http.delete<User>(user_api + '/user/'+user.id,httpOptions);
    }

    updateUser(user: User) : Observable<User> { 
        return this.http.put<User>(user_api + '/user/'+user.id,httpOptions);
    }

    searchUserByFName(fname:any) : Observable<User[]> {
        console.log("########Inside Service : " + fname)
        return this.http.get<User[]>(user_api + "/user");
    }
}
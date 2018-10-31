import { FormControl, AsyncValidator, ValidationErrors } from "@angular/forms";
import { Observable, Observer, of } from "rxjs";
import { UserService } from "../User/app.user.service";
import { map, catchError } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { User } from "../User/app.user.model";


@Injectable()
export class EmailAsyncValidator {


    static isUniqueEmailID(userService: UserService)   {
        return (control : FormControl) : Observable<ValidationErrors | null> | Promise<ValidationErrors | null> => {
            return  userService.isUserAvailable(control.value).pipe(
                map((isAvailable: User[]) => isAvailable != null  ?  {'emailNotAvailable' : true} : null),
                catchError((error) => error)
            ) 
        } 
        }
         
}
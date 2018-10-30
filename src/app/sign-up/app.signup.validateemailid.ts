import { FormControl, AsyncValidator, ValidationErrors } from "@angular/forms";
import { Observable, Observer, of } from "rxjs";
import { UserService } from "../User/app.user.service";
import { map, catchError } from "rxjs/operators";
import { Injectable } from "@angular/core";


@Injectable()
export class EmailAsyncValidator {


    static isUniqueEmailID(userService: UserService)   {
        return (control : FormControl) : Observable<ValidationErrors | null> | Promise<ValidationErrors | null> => {
            return  userService.isUserAvailable(control.value).pipe(
                map((isAvailable: boolean) => isAvailable ?  null : {'emailNotAvailable' : true}),
                catchError(() => null)
            ) 
        } 
        }
         
}
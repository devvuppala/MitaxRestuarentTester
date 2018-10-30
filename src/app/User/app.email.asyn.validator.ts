import { Directive } from "@angular/core";
import { NG_VALIDATORS, NG_ASYNC_VALIDATORS, AsyncValidator, FormControl, ValidationErrors } from "@angular/forms";
import { Observable } from "rxjs";
import { UserService } from "./app.user.service";
import { map } from "rxjs/operators";

@Directive({
    selector: '[uniqueEmailValidator]',
    providers: [{
        provide: NG_ASYNC_VALIDATORS,
        useExisting: UniqueEmailAsyncValidation,
        multi : true
    }]
})

export class UniqueEmailAsyncValidation implements AsyncValidator {

    constructor(private userService : UserService) {

    }

    validate(control: FormControl) : Observable<ValidationErrors | null> | Promise<ValidationErrors | null> {
        console.log("UniqueEmailAsyncValidation : " + control.value)
        return this.userService.isUserAvailable(control.value).pipe( 
            map(isAvaialble =>  {
                console.log("Available" + isAvaialble)
                 return !isAvaialble ? {'emailNotAvailable' : true} : {'emailNotAvailable' : false};
            })
        )
    }
}
import { Directive } from "@angular/core";
import { Validator, FormControl, NG_VALIDATORS } from "@angular/forms";

@Directive({
    selector: '[usernameValidator]',
    providers: [
        {
            provide: NG_VALIDATORS,
            multi: true,
            useClass: UsernameValidator
        }
    ]
})

export class UsernameValidator implements Validator {

    validate(input : FormControl)  : {[key:string] : boolean}  | null {
        console.log(input);
        if(input.value != null && input.value.length > 0) {
            if(input.value === 'Bob') {
                return {'invalidUserNameBob' : true}
            } else if(input.value === 'Pauler') {
                return {'invalidUserNamePauler' : true}
            }  else {
                return null;
            }
        } else {
            return {'invalidUsenameNull' : true}
        }
    }
}
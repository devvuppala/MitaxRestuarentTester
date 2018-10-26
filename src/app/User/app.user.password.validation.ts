import { Directive } from "@angular/core";
import { NG_VALIDATORS, Validator, FormControl } from "@angular/forms";

@Directive({
    selector:'[userPasswordValidator]',
    providers: [{
        provide: NG_VALIDATORS, // This is called Opique token, contains list of all validators including angulkar default validator
        multi: true , //This to let angular to add this custom validator to the list
        useExisting: UserPasswordValidator
    }]
})

export class UserPasswordValidator implements Validator {

    validate(control : FormControl) : {[key:string] : boolean}{
        console.log(control);
        if(control.value != null && control.value.length > 0) {
            if(control.value.length > 9) {
                return null;
            } else {
                return {'userPassowrdValidationError': true}
            }
        } else {
            return {'userPassowrdValidationError': true}
        }
    }
}
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'myCurrencyConvertor'
})

export class MyCurrencyConvertor implements PipeTransform {

    transform(value: number , localCurrency : string , country:string) {
        if(localCurrency === 'us' && country === 'us') {
            return '$. ' + value ;
        } else if(localCurrency ==='IND' && country === 'us') {
            return 'INR. ' + value * 74 ;
        } else if(localCurrency === 'Cad' && country === 'us') {
            return 'Cad. ' + value * 1.25 ;
        } else {
            return 'ERROR! Not a valid input'
        }
    }
}
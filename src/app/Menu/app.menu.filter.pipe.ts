import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filterPipe',
    pure: true
})

export class MyFilterPipe implements PipeTransform {

    transform(value: any , searchText : string , property:string) {
        console.log(value);
        console.log(searchText);
        console.log(property);
        if(searchText === '') {
            return value;
        } else {
            if(value != null && value.length > 0) {
                const resultArr = [];
                for(let item of value) {
                    let propertyValue =item[property];
                    if(propertyValue.toLowerCase().includes(searchText.toLowerCase())) {
                        resultArr.push(item);
                    }
                }
                return resultArr;
            } else {
                return value; 
            }
        }
    }
}
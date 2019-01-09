import { Injectable } from '@angular/core';
import { BookForTest } from './tester.model.service';

@Injectable({
  providedIn: 'root'
})
export class TesterServiceService {

  constructor() { }

  getBooks() : BookForTest[]{
    let books : BookForTest[] = 
    [
      {
        id: 1,
        name:'Book1'
      }, {
        id: 2,
        name:'Book21'
      }, {
        id: 3,
        name:'Book3'
      }, 
   ]
  return books;
  }

  getBooksException() : BookForTest[]{
    let books : BookForTest[] = 
    [ {
        id: 2,
        name:'Book21'
      }, {
        id: 3,
        name:'Book3'
      }, 
   ]
  return books;
  }


  getDataAsynchr() {
    const result = new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve('Returned Data')
      }, 1500)
    })

    return result;
  }
  
}

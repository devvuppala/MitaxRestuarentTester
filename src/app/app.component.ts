import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mintaxTester';
  heroes:string[] = ['PK','MK','SK']
  recentlyAddedHero: String;
  amount:number = 100;
  ngModelamount:number = 999;

  submitValue(input) {
    let inputValue: string = input.value;
    this.heroes.push(inputValue)
    this.recentlyAddedHero = inputValue.toUpperCase();
  }

  handleEvent(event) {
    this.amount = event.target.value;
  }

  UpdateAmount(value) {
    this.ngModelamount = value;
  }
  
  getLoggedInUser() {
    return sessionStorage.getItem('loggedInName');
  }

  isLoggedIn() {
    return sessionStorage.getItem('loggedInName') != null;
  }

  logout() {
    sessionStorage.clear();
  }
}

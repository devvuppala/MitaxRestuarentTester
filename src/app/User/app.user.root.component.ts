import { Component, OnInit } from '@angular/core';
import { User } from './app.user.model';
import { UserService } from './app.user.service';
import { Subject, Observable } from 'rxjs';
import { debounceTime, throttleTime, distinctUntilChanged, switchMap, map } from 'rxjs/operators';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'user-root',
  templateUrl: './app.user.component.html',
  styleUrls: ['./app.user.component.scss']
})

export class UserRootComponent implements OnInit{
  
    users: User[] = []
    errorRetrevingUsers: boolean = false;
    errorMessage: string ;
    userSearchInput: Observable<string> = new Observable<string>();
    customInput : Subject<string> = new Subject();
    enableAddUser:boolean = false;
    newUser: User = {
        username:'',
        password: '',
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        role: '',
        dateOfBirth: new Date('01-24-1987')
    }
    //private userSearchInput = new Subject<string>();

    constructor(private userService : UserService) {
        //Inject
    }

    ngOnInit() {
        //get the user list

        this.userService.getAllUsers().subscribe((returnedUsers: User[]) => {
            this.users = returnedUsers;
        }, (error) => {
            this.errorRetrevingUsers = true;
            console.log(error);
            this.errorMessage = 'Status:' + error.status + 'Error Message : ' + error.error;
        })
    }

    enableODisableAddUser() {
        this.enableAddUser = !this.enableAddUser;
    }
    addUser(form: NgForm) {
        console.log(form)
        console.log(this.newUser)
        /*let user:User = {
            username:'Dev',
            password: 'DevV',
            firstName: 'Dev',
            lastName: 'V',
            phone: '555-555-5555',
            email: 'd@gmail.com',
            role: 'Role',
            dateOfBirth: new Date('01-24-1987')
        }

        this.userService.addTheUser(user).subscribe((newUser: User) => {
            this.userService.getAllUsers().subscribe((returnedUsers: User[]) => {
                this.users = returnedUsers;
            }, (error) => {
                this.errorRetrevingUsers = true;
                console.log(error);
                this.errorMessage = 'Status:' + error.status + 'Error Message : ' + error.error;
            })
        })*/
    }

    deleteUser() {
        let user:User = {
            id: 761,
            username:'Dev',
            password: 'DevV',
            firstName: 'Dev',
            lastName: 'V',
            phone: '555-555-5555',
            email: 'd@gmail.com',
            role: 'Role',
            dateOfBirth: new Date('01-24-1987')
        }

        this.userService.deleteUser(user).subscribe((deletedUser: User) => {
            this.userService.getAllUsers().subscribe((returnedUsers: User[]) => {
                this.users = returnedUsers;
            }, (error) => {
                this.errorRetrevingUsers = true;
                console.log(error);
                this.errorMessage = 'Status:' + error.status + 'Error Message : ' + error.error;
            })
        })
    }

    updateUserResult() {
        console.log(typeof this.userSearchInput);
        // /this.userService.searchUserByFName(this.userSearchInput).pipe(throttleTime(5000), debounceTime(10000)).subscribe();
        // this.userSearchInput.pipe(debounceTime(10000)).subscribe(() => {
        //     this.userService.searchUserByFName(this.userSearchInput);
        // });

        this.userSearchInput.pipe(
            debounceTime(500),
            distinctUntilChanged(),
            switchMap(packageName =>
              this.userService.searchUserByFName(packageName))
          );
    }

    inputValueChanged(event){
        console.log(event);
         this.customInput.next(event);
         this.customInput.pipe(map(event => event) , debounceTime(1000),distinctUntilChanged()).subscribe(value =>{
            //value will have your input
            let date : Date = new Date('MM-dd-yyyy hh:mm:ss')
            console.log(date + ' ::::: ' + value);
            this.userService.searchUserByFName(value).subscribe((users: User[]) => {
                console.log(users != null ? users.length : 0);
            });
         });
    }

    
}

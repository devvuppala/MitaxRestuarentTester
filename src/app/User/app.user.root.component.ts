import { Component, OnInit } from '@angular/core';
import { User } from './app.user.model';
import { UserService } from './app.user.service';

@Component({
  selector: 'user-root',
  templateUrl: './app.user.component.html',
  styleUrls: ['./app.user.component.scss']
})

export class UserRootComponent implements OnInit{
  
    users: User[] = []
    errorRetrevingUsers: boolean = false;
    errorMessage: string ;

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

    addUser() {
        let user:User = {
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
        })
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

    
}

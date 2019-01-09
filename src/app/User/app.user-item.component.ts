import { Component, OnInit } from '@angular/core';
import { User } from './app.user.model';
import { UserService } from './app.user.service';
import { Subject, Observable } from 'rxjs';
import { debounceTime, throttleTime, distinctUntilChanged, switchMap, map } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'user-item',
  template: `
    <a routerLink="/users">Users</a>
    This is User item Component

    {{thisUser?.username}}
    {{thisUser?.password}}
    {{thisUser?.firstName}}
    {{thisUser?.lastName}}
  
  `
})

export class UserItemComponent implements OnInit{
  
    constructor(private userService : UserService ,     
                private router: Router , 
                private activatedRouter : ActivatedRoute) {

    }

    thisUser: User;
    ngOnInit() {
        console.log(this.activatedRouter);
        let userID = this.activatedRouter.snapshot.params['userID'];
        let usernameParam = this.activatedRouter.snapshot.queryParams['username'];
        console.log(usernameParam);
        let filteredUsers: User[] = [];
        console.log(userID);
        this.userService.getAllUsers().subscribe((users: User[]) => {
        filteredUsers = users.filter((user) => {
                return user.id == 1341;
            })
        console.log("filteredUsers" + filteredUsers);
        filteredUsers.forEach((user) => {
            this.thisUser = user;
        })
        })
        
    }

    
}

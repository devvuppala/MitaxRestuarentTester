import { Component, OnInit } from "@angular/core";
import { User } from "../User/app.user.model";
import { UserService } from "../User/app.user.service";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "login-root",
  templateUrl: "../login/app.login.template.html",
  styleUrls: ["../login/app.login.component.scss"]
})

export class LoginComponent implements OnInit {
  constructor(private userService: UserService , 
              private router : Router,
              private activatedRoute: ActivatedRoute) {
    //Inject
  }
  
  ngOnInit() {

  }

  emailID: string;
  password: string;
  loginSuccess : boolean = true;

  loginUser(loginForm : NgForm) {
    //Check here
    console.log(this.emailID  + " : " + this.password);
    if(this.emailID === "d" && this.password === "d") {
      this.loginSuccess = true;
      sessionStorage.setItem('loggedInName','Dev Vuppala');
      this.router.navigate(['menus']);
    } else {
      this.loginSuccess = false;
      this.router.navigate(['/']);
    }

    
  }


  navigateToRegister() {
    this.router.navigate(['/signup'])
  }
}

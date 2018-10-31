import { Component, OnInit } from "@angular/core";
import { User } from "../User/app.user.model";
import { UserService } from "../User/app.user.service";
import { Subject, Observable } from "rxjs";
import {
  debounceTime,
  throttleTime,
  distinctUntilChanged,
  switchMap,
  map
} from "rxjs/operators";
import {
  NgForm,
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
  ValidatorFn,
  AbstractControl
} from "@angular/forms";
import { EmailAsyncValidator } from "./app.signup.validateemailid";
import { UniqueEmailAsyncValidation } from "../User/app.email.asyn.validator";

@Component({
  selector: "signup-root",
  templateUrl: "./app.signup.component.html",
  styleUrls: ["./app.signup.component.scss"]
})
export class SignUpRootComponent implements OnInit {
  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {
    //Inject
  }
  users: User[] = [];
  newUser: User = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    role: "",
    dateOfBirth: new Date("01-24-1987")
  };

  //name = new FormControl('');
  regForm = new FormGroup({
    username: new FormControl("", [
      Validators.required,
      Validators.minLength(5),
      this.forbiddenNameValidator(new RegExp("[^A-Za-z0-9]+"))
    ],
    EmailAsyncValidator.isUniqueEmailID(this.userService)),
    password: new FormControl("", Validators.min(5)),
    emailID: new FormControl(
      "",
      Validators.email
    ),
    address: new FormGroup({
      street: new FormControl(""),
      city: new FormControl(""),
      state: new FormControl(""),
      zip: new FormControl("")
    }),
    hobbies: new FormArray([new FormControl("Music"), new FormControl("Dance")])
  });

  isUsernameStatusPending:boolean =  false;

 
  /*fbRegForm = this.formBuilder.group({
        username : [''],
        password : [''],
        emailID : [''],
        address: this.formBuilder.group({
            street: [''],
            city: [''],
            state: [''],
            zip: [''],
          }),
          hobbies: this.formBuilder.array([
               this.formBuilder.control('Music'),
               this.formBuilder.control('Dance')
        ])
    })*/

  get hobbies() {
    return this.regForm.get("hobbies") as FormArray;
  }

  addHobbies() {
    this.hobbies.push(new FormControl(""));
  }

  ngOnInit() {
    this.regForm.valueChanges.subscribe(changes => {
      console.log(changes)
      console.log(this.regForm)
    })

    this.regForm.statusChanges.subscribe(status => {
      console.log(status);
      if(this.regForm.get('username'). status == "PENDING") {
        this.isUsernameStatusPending = true;
      } else {
        this.isUsernameStatusPending = false;
      }
    })
  }

  updateName() {
    //this.name.setValue("tester");
    this.regForm.patchValue({
      username: "Test",
      address: {
        street: "123 Drew Street"
      }
    });

    /* this.fbRegForm.patchValue({
            username: 'Test',
            address: {
                street: '123 Drew Street'
            }
        })*/
  }

  OnRegFormSubmit() {
    console.log(this.regForm.value);
  }

  addUser(form: NgForm) {
    console.log(form);
    console.log(this.newUser);
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

  usernamesAllowed(name: string): { [key: string]: boolean } {
    if (name === "Bob") {
      return { invalidUsername: true };
    } else {
      return null;
    }
  }

  forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      //console.log(control.value + " : " + nameRe);
      const forbidden = nameRe.test(control.value);
      //console.log(forbidden);
      return forbidden ? { forbiddenName: { value: control.value } } : null;
    };
  }

  validateEmailID(control: FormControl) {
    console.log("Async : " + control.value);
    this.userService
      .isUserAvailable(control.value)
      .subscribe((isAvailable: User[]) => {
        return isAvailable;
      });
  }

}

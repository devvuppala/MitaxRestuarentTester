import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import {HttpClientModule} from '@angular/common/http'
import {RouterModule, Routes} from '@angular/router'

import { AppComponent } from './app.component';
import { MenuModule } from './Menu/app.menu.module';
import { TempModule } from './Temp/app.test.module';
import { AdvertisementModule } from './advertisement/app.advertisement.module';
import { BookModule } from './Books/app.book.module';
import { UserModule } from './User/app.user.module';
import { ErrorService } from './app.error.service';
import { HttpErrorHandler } from './app.error.handler';
import { SignUpModule } from './sign-up/app.signup.module';
import { LoginModule } from './login/app.login.module';
import { LoginComponent } from './login/app.login.component';
import { SignUpRootComponent } from './sign-up/app.signup.component';
import { MenuComponent } from './Menu/app.menu.component';
import { PageNotFoundComponent } from './app.page-not-found-component';
import { UserRootComponent } from './User/app.user.root.component';
import { TesterComponent } from './tester/tester.component';

const routes : Routes = [
  {path:'' , component:LoginComponent},
  {path:'signup' , component:SignUpRootComponent},
  {path:'menus' , component:MenuComponent},
  {path:'users' , component:UserRootComponent},
  {path:'testBooks' , component:TesterComponent},
  {path:'menus/:id' , component:MenuComponent , data: { title: 'Heroes List' }},
  {path:'**', component: PageNotFoundComponent}
]

@NgModule({
  declarations: [
    
  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  providers: []
})
export class AppRoutingModule { }

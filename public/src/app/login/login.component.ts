import { Component, OnInit } from '@angular/core';
import {LoginService} from './login.service';
import {UIRouter} from 'ui-router-ng2';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

  providers: [LoginService,CookieService]
})
export class LoginComponent implements OnInit {

  user : any = {};

  constructor(private loginService : LoginService, private uiRouter:UIRouter,private _cookieService:CookieService) { }

  ngOnInit() {
    console.log('oninit');
    this.loginService.checkAuth()
      .subscribe(
        data => {
          this.uiRouter.stateService.go('dashboard');
        },
        error => {
          console.log(error);
        }
      )
  }

  login(){
      this.loginService.getAuthenticate(this.user.login, this.user.password)
        .subscribe(
          data => {
            localStorage.removeItem('loggedUser');
            localStorage.setItem('loggedUser', data.token);
            this.uiRouter.stateService.go('dashboard');

            console.log(data);

          },
          error => {
            console.log(error);
          }
        )


  }



}

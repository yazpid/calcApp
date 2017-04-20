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

  ngOnInit() {}

  login(){
      this.loginService.getAuthenticate(this.user.name, this.user.password)
        .subscribe(
          data => {
            this._cookieService.putObject('user',data);
            this.uiRouter.stateService.go('dashboard');
            // this.uiRouter.transitionService.onStart({to: 'login.**'}, function (trans) {
            //   var $state = trans.router.stateService;
            //   return $state.target('dashboard');
            // })

            console.log(data);

          },
          error => {
            console.log(error);
          }
        )


  }



}

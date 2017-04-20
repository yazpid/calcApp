import { Component, OnInit } from '@angular/core';
import {LoginService} from './login.service';
import {UIROUTER_DIRECTIVES} from 'ui-router-ng2';
import {UIRouter} from 'ui-router-ng2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  user : any = {};

  constructor(private loginService : LoginService, private uiRouter:UIRouter) { }

  ngOnInit() {}

  login(){
      this.loginService.getAuthenticate(this.user.name, this.user.password)
        .subscribe(
          data => {

            this.uiRouter.stateService.target('dashboard');
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

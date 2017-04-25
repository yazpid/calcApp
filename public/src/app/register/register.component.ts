import {Component, OnInit} from '@angular/core';
import {RegisterService} from './register.service';
import {UIRouter} from 'ui-router-ng2';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', '../login/login.component.css'],
  providers : [RegisterService]
})
export class RegisterComponent implements OnInit {

  public user : Object = {};

  constructor(private registerService: RegisterService, private uirouter: UIRouter) { }

  ngOnInit() {
  }

  newUser(){
      this.registerService.
      createUser(this.user)
        .subscribe(
          resp =>{
            this.uirouter.stateService.go('login');
          },
          error =>{
            this.uirouter.stateService.reload();
          }
        )
  }
}

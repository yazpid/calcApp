import {Injectable} from '@angular/core';
import {Restangular} from "ng2-restangular";
import {UIRouter} from 'ui-router-ng2';
import 'rxjs/add/operator/map'

@Injectable()
export class LoginService {


  constructor(private restangular: Restangular, private uirouter : UIRouter) {
    console.log("Service initialized")
  }

  getAuthenticate(name : string, password: string) {
     return this.restangular
      .all('authenticate')
      .post({name: name, password: password});
  }

  checkAuth(){
    return this.restangular
      .all('auth')
      .post();
  }

  logout(){
      localStorage.removeItem('loggedUser');

      return this.uirouter.stateService.go('login');
  }



}

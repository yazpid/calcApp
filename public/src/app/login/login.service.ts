import {Injectable} from '@angular/core';
import {Restangular} from "ng2-restangular";
import 'rxjs/add/operator/map'

@Injectable()
export class LoginService {

  constructor(private restangular: Restangular) {
  }

  getAuthenticate(name, password) {
    return this.restangular
      .all('authenticate')
      .post({name: name, password: password})
      .then(function (data) {
        console.log(data);
      })
  }
}

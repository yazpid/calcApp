import { Injectable } from '@angular/core';
import {Restangular} from 'ng2-restangular';


@Injectable()
export class RegisterService {

  constructor(private restangular: Restangular) { }

  createUser(user){
    return this.restangular
      .all('user')
      .post(user);
  }
}

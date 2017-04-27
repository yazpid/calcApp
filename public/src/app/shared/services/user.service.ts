import { Injectable } from '@angular/core';
import {Restangular} from 'ng2-restangular';

@Injectable()
export class UserService {

  constructor(private restangular: Restangular) { }

  getUser(id: string){
    return this.restangular
      .all('user')
      .get(id);
  }
}

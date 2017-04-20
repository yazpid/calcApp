import {Injectable} from '@angular/core';
import {Restangular} from "ng2-restangular";
import { Http, Headers, Response } from '@angular/http';
import {Observable} from 'rxjs/observable'
import 'rxjs/add/operator/map'

@Injectable()
export class LoginService {

  constructor(private restangular: Restangular,private http: Http) {
    console.log("Service initialized")
  }

  getAuthenticate(name : string, password: string) {
     return this.restangular
      .all('authenticate')
      .post({name: name, password: password});
  }
}

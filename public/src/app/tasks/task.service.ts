import { Injectable } from '@angular/core';
import {Restangular} from "ng2-restangular";
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class TaskService {

  constructor(private restangular : Restangular, private http: Http) {
    console.log("Service initialized")
  }


  getTasks(){
    return this.restangular.all('tasks').getList();
    //return this.http.get('http://localhost:3000/api/tasks')
    //  .map(res => res.json());
  }

}

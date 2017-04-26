import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {Injector} from '@angular/core';
import {LoginService} from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  closeResult: string;
  public userId: string = '';



  constructor(private modalService: NgbModal, private injector : Injector){}

  ngOnInit(){
    userId => {
      return JSON.parse(localStorage.getItem('loggedUser')).id;
    }
  }

  open(content) {
    this.modalService.open(content).result.then(
      (result) => {
         this.injector.get(LoginService).logout()
    }, (reason) => {

    });
  }

}

import { Component, OnInit, Input, Output } from '@angular/core';
import {User} from '../../models/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  @Input() user : User = {
    firstName : '',
    login: '',
    password: '',
    email: '',
};

  constructor() { }

  ngOnInit() {
    console.log(this.user);
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {UIRouterModule} from 'ui-router-ng2';
import {appStates} from '../app.states';
import {sharedStates} from './shared.states';


import {UserFormComponent} from './user-form/user-form.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    UserFormComponent
      ],
  exports: [CommonModule,FormsModule,UserFormComponent]
})
export class SharedModule { }

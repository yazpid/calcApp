import {AppComponent} from './app.component';
import {TasksComponent} from './tasks/tasks.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {SettingsComponent} from './dashboard/settings/settings.component';
import {UserService} from './shared/services/user.service';
import {Transition} from 'ui-router-ng2';
import {Injector} from '@angular/core';
import {Ng2StateDeclaration} from 'ui-router-ng2';



export const loginState = {
  name : 'login',
  url : '/login',
  component : LoginComponent

};

export const registerState = {
  name: 'register',
  url: '/register',
  component: RegisterComponent
};

export const dashboardState = {
  name : 'dashboard',
  url : '/dashboard',
  redirectTo : 'tasks',
  component : AppComponent
};

export const taskState = {
  parent : 'dashboard',
  name : 'tasks',
  url : '/tasks',
  component : TasksComponent
};

export const settingsState = {
  parent: 'dashboard',
  name: 'settings',
  url: '/settings/:id',
  component: SettingsComponent,
  resolve: [
    {
      token: 'user',
      deps: [Transition,UserService],
      resolveFn: getUser
    }
  ]
};




export const appStates = [
  loginState,
  dashboardState,
  taskState,
  registerState,
  settingsState
];


export function getUser(inject: Injector, trans: Transition){
  const userSvc = inject.get(UserService);
  return userSvc.getUser(trans.params().id);
}

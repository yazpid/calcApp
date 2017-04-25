import {AppComponent} from './app.component';
import {TasksComponent} from './tasks/tasks.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';


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




export const appStates = [
  loginState,
  dashboardState,
  taskState,
  registerState
];

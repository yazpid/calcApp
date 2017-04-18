import {AppComponent} from './app.component';
import {TasksComponent} from './tasks/tasks.component';



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
  dashboardState,
  taskState
];

import {BrowserModule} from '@angular/platform-browser';
import {NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {CookieModule} from 'ngx-cookie';
import {CookieService} from 'ngx-cookie';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from '@angular/material';



//app files
import {SharedModule} from './shared/shared.module';
import {DashboardModule} from './dashboard/dashboard.module'

import {LoginService} from './login/login.service';
import {UserService} from './shared/services/user.service';

import {AppComponent} from './app.component';
import {TasksComponent} from './tasks/tasks.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';

//ui-router
import {UIRouterModule, UIView} from 'ui-router-ng2';
import {appStates} from './app.states';
import {routerConfig} from './app.router.config';






//restangular

import {RestangularModule, Restangular} from 'ng2-restangular';
export function RestangularConfigFactory(RestangularProvider) {

  RestangularProvider.setBaseUrl('http://localhost:3000/api/');
  RestangularProvider.setDefaultHeaders
  ({
    "Content-Type": "application/json",
  });

  RestangularProvider.addFullRequestInterceptor((element, operation, path, url, headers, params) => {
    if ("loggedUser" in localStorage) {
      let loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
      return {
        headers: Object.assign({}, headers, {'x-access-token': loggedUser.token})
      };
    } else {
     return{
       headers: Object.assign({}, headers, {'x-access-token': ''})
     };

    }
  });

}


//bootstrap
import {AlertModule} from 'ngx-bootstrap';

//angular material
//import {BrowserAnimationsModule} from '@angular/platform-browser/';
//import {MdButtonModule, MdCheckboxModule} from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule,
    DashboardModule,
    NgbModule.forRoot(),
    CookieModule.forRoot(),
    UIRouterModule.forRoot({
      states: appStates,
      useHash: true,
      otherwise: {state: 'dashboard'},
      config: routerConfig
    }),
    RestangularModule.forRoot(RestangularConfigFactory),
    AlertModule.forRoot()
  ],
  providers: [CookieService,LoginService,UserService],
  bootstrap: [UIView]
})
export class AppModule {
}

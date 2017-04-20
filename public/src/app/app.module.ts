import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CookieModule } from 'ngx-cookie';
import { CookieService } from 'ngx-cookie';

//ui-router
import {UIRouterModule, UIView} from 'ui-router-ng2';
import {appStates} from './app.states';
import {routerConfig} from './app.router.config';

//restangular

import { RestangularModule, Restangular } from 'ng2-restangular';
export function RestangularConfigFactory (RestangularProvider, CookieService) {
  RestangularProvider.setBaseUrl('http://localhost:3000/api/');
  //CookieService.putObject('user','test');
  //console.log(CookieService.getObject('user'));
  console.log(CookieService);
  //RestangularProvider.setDefaultHeaders({'x-user-token-api':data.token});

}

//bootstrap
import { AlertModule } from 'ngx-bootstrap';

//angular material
//import {BrowserAnimationsModule} from '@angular/platform-browser/';
//import {MdButtonModule, MdCheckboxModule} from '@angular/material';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CookieModule.forRoot(),
    UIRouterModule.forRoot({
      states : appStates,
      useHash : true,
      otherwise : { state: 'dashboard'},
      config : routerConfig
    }),
    RestangularModule.forRoot(RestangularConfigFactory),
    AlertModule.forRoot()
  ],
  providers: [CookieService],
  bootstrap: [UIView]
})
export class AppModule { }

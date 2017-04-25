import {UIRouter, Category} from 'ui-router-core';
import {Injector} from '@angular/core';
import {LoginService} from './login/login.service';


export function routerConfig(router: UIRouter, injector: Injector) {
  // const transitionService = router.transitionService;

  router.trace.enable(Category.TRANSITION);
  // router.plugin(Visualizer);

  router.transitionService.onBefore({to: 'tasks'}, function (trans) {
    const authMethod = injector.get(LoginService);
    console.log("sss");
    authMethod.checkAuth()
      .subscribe(
        resp => {
          console.log("resp", resp);
        },
        error => {
          error.status === 403 ? (router.stateService.go("login"), console.log("error", error) ) : ('');
        }
      );


  });
}

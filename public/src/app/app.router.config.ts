import { UIRouter, Category } from 'ui-router-core';

export function routerConfig(router: UIRouter) {
  // const transitionService = router.transitionService;

  router.trace.enable(Category.TRANSITION);
  // router.plugin(Visualizer);
}

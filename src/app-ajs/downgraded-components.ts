import { IModule } from 'angular';
import { downgradeComponent } from '@angular/upgrade/static';
import { FooComponent } from 'src/app/foo/foo.component';

export const registerDowngradedComponents = (app: IModule): void => {
  app.directive('appFoo', downgradeComponent({ component: FooComponent }));
};

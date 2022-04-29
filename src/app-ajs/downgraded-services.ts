import { IModule } from 'angular';
import { downgradeInjectable } from '@angular/upgrade/static';
import { FooService } from 'src/app/services/foo.service';

export const registerDowngradedServices = (app: IModule): void => {
  app.service('FooService', downgradeInjectable(FooService));
};

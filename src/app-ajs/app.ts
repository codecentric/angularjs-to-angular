import './app.module';
import * as angular from 'angular';
import { ILocationProvider } from 'angular';
import { registerDowngradedServices } from './downgraded-services';
import { registerDowngradedComponents } from './downgraded-components';

const app = angular.module('ajs');

// init main register functions
app.config(($locationProvider: ILocationProvider): void => {
  $locationProvider.hashPrefix('');
  $locationProvider.html5Mode(true);
});

export const prepare = async (): Promise<void> => {
  registerDowngradedServices(app);
  registerDowngradedComponents(app);
};

export { app };
import './index';

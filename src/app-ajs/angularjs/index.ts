import * as angular from 'angular';
import { AngularJSController } from './angularjs.controller';
import IRouteProvider = angular.route.IRouteProvider;
import template from './angularjs.controller.html';

angular
  .module('ajs')
  .config([
    '$routeProvider',
    ($routeProvider: any): IRouteProvider =>
      $routeProvider.when('/angularjs', {
        template: template,
        controller: 'AngularJSController',
        controllerAs: '$ctrl',
        reloadOnSearch: false,
      }),
  ])
  .controller('AngularJSController', AngularJSController);

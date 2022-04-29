import {IComponentController, IComponentOptions} from 'angular';

class RouterComponentController implements IComponentController {

}

export const RouterComponent: IComponentOptions = {
    template: `<div id="viewDiv" ng-view></div>`,
    controller: RouterComponentController,
};

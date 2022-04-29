import { IComponentController, IComponentOptions } from 'angular';
import template from './bar.component.html';

class BarController implements IComponentController {}

export const BarComponent: IComponentOptions = {
  template: template,
  bindings: {},
  controller: BarController,
};

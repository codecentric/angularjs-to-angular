import { Directive, ElementRef, Injector, Input } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

@Directive({
  selector: 'app-upgraded-router',
})
export class RouterDirective extends UpgradeComponent {
  constructor(elementRef: ElementRef, injector: Injector) {
    super('router', elementRef, injector);
  }
}

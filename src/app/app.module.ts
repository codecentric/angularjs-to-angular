import { ApplicationRef, DoBootstrap, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooComponent } from './foo/foo.component';
import { setAngularJSGlobal, UpgradeModule } from '@angular/upgrade/static';
import { setUpLocationSync } from '@angular/router/upgrade';
import { UpgradedComponentsModule } from './upgraded-components/upgraded-components.module';
import * as angular from 'angular';
import { app, prepare } from 'src/app-ajs/app';
import { AngularComponent } from './angular/angular.component';

setAngularJSGlobal(angular);

@NgModule({
  declarations: [
    AppComponent,
    FooComponent,
    AngularComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UpgradeModule,
    UpgradedComponentsModule,
  ],
  providers: [
    {
      provide: '$scope',
      useExisting: '$rootScope',
    },
  ],
})
export class AppModule implements DoBootstrap {
  constructor(private upgrade: UpgradeModule) {}

  ngDoBootstrap = (appRef: ApplicationRef): void => {
    prepare().then(() => {
      this.upgrade.bootstrap(document.body, [app.name], { strictDi: false });
      appRef.bootstrap(AppComponent);
      setUpLocationSync(this.upgrade);
    });
  };
}

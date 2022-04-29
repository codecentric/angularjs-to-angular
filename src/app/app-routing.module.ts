import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
  UrlHandlingStrategy,
  UrlTree,
} from '@angular/router';
import { AngularComponent } from './angular/angular.component';

const routes: Routes = [
  {
    path: 'angular',
    component: AngularComponent,
  },
];

export const isAngularJsRoutePath = (url: string): boolean =>
  routes.find((route): boolean => {
    const childrenRegex = route.children
      ?.map((childRoute) => childRoute.path as string)
      .reduce((prev, curr) => prev + '|' + replaceRouteParamsWithRegex(curr));
    const queryParams = '(\\?.+)?';
    const parentRegex = route.path;
    if (new RegExp(`^/${parentRegex}/.*`).test(url)) {
      return new RegExp(
        `^/${parentRegex}/(${childrenRegex})${queryParams}$`
      ).test(url);
    } else {
      return new RegExp(`^/${parentRegex}${queryParams}$`).test(url);
    }
  }) === undefined;

export const replaceRouteParamsWithRegex = (routePath: string): string =>
  routePath
    .split('/')
    .map((path) => {
      if (path.includes(':')) {
        return '[a-zA-Z0-9\\-%_]+';
      }
      return path;
    })
    .join('/');

class CustomHandlingStrategy implements UrlHandlingStrategy {
  shouldProcessUrl(url: UrlTree): boolean {
    const angularUrl = !isAngularJsRoutePath(url.toString());
    if (angularUrl) {
      console.debug(url + ' -> Angular router');
    } else {
      console.debug(url + ' -> AngularJS router');
    }
    return angularUrl;
  }

  extract(url: UrlTree): UrlTree {
    return url;
  }

  merge(url: UrlTree, whole: UrlTree): UrlTree {
    return url;
  }
}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: UrlHandlingStrategy, useClass: CustomHandlingStrategy },
  ],
})
export class AppRoutingModule {}

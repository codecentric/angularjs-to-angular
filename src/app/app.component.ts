import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { isAngularJsRoutePath } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private location: Location) {}

  isAjsRoutePath(): boolean {
    return isAngularJsRoutePath(this.location.path());
  }
}

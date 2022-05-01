import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterDirective, BarDirective } from './upgraded-components';

@NgModule({
  declarations: [RouterDirective, BarDirective],
  imports: [CommonModule],
  exports: [RouterDirective, BarDirective],
})
export class UpgradedComponentsModule { }

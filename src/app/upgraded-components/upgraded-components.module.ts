import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterDirective } from './upgraded-components';

@NgModule({
  declarations: [RouterDirective],
  imports: [CommonModule],
  exports: [RouterDirective],
})
export class UpgradedComponentsModule {}

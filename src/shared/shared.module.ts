import { NgModule } from '@angular/core';
import { PercentChangeDirective } from "./directives/percent-change.directive";
import { CommonModule } from "@angular/common";
import { IonicModule } from "ionic-angular";
import { IconsDirective } from "./directives/icons.directive";

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
  ],
  declarations: [
    PercentChangeDirective,
    IconsDirective,
  ],
  providers: [
  ],
  exports: [
    CommonModule,
    IonicModule,
    PercentChangeDirective,
    IconsDirective,
  ],
})
export class SharedModule {
}

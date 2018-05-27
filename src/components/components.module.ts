import { NgModule } from '@angular/core';
import { TotalInfoComponent } from './total-info/total-info';
import { AssetsListComponent } from './assets-list/assets-list';
import { SharedModule } from "../shared/shared.module";

@NgModule({
	declarations: [
	  TotalInfoComponent,
    AssetsListComponent
  ],
	imports: [
    SharedModule,
  ],
	exports: [
	  TotalInfoComponent,
    AssetsListComponent
  ]
})
export class ComponentsModule {}

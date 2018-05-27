import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './modules/material/material.module';
import { KeysPipe } from './pipes/keys.pipe';
import { TransformUrlPipe } from './pipes/transform-url.pipe';

@NgModule({
  imports: [
    CommonModule ,
    RouterModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  declarations: [
    KeysPipe,
    TransformUrlPipe,
  ],
  exports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule,
    KeysPipe,
    TransformUrlPipe,
  ],
  providers: []
})
export class SharedModule {
}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FundsPage } from './funds';

@NgModule({
  declarations: [
    FundsPage,
  ],
  imports: [
    IonicPageModule.forChild(FundsPage),
  ],
})
export class FundsPageModule {}

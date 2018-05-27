import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WatchlistPage } from './watchlist';
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  declarations: [
    WatchlistPage,
    SharedModule,
  ],
  imports: [
    IonicPageModule.forChild(WatchlistPage),
  ],
})
export class WatchlistPageModule {}

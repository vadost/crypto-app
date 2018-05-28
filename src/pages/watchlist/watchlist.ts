import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WatchlistProviders } from "../../providers/api/watchlist.providers";
import { Ticker, TotalInfo } from "../../models/watchlist.interface";
import { Observable } from "rxjs/Observable";
import { map } from "rxjs/operators";

/**
 * Generated class for the WatchlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-watchlist',
  templateUrl: 'watchlist.html',
})
export class WatchlistPage {
  totalInfo$: Observable<TotalInfo>;
  tickers$: Observable<Ticker[]>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private watchlistProviders: WatchlistProviders) {
    this.initializeItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WatchlistPage');
  }

  initializeItems() {
    this.totalInfo$ = this.watchlistProviders.getTotalInfo();
    this.tickers$ = this.watchlistProviders.getTickers();
  }

  onSearchItems(val: string) {
    // Reset items back to all of the items
    this.initializeItems();

    if (val && val.trim() != '') {
      this.tickers$ = this.tickers$.pipe(
        map(item => item.filter(ticker => ticker.code.toLowerCase().indexOf(val.toLowerCase()) > -1))
      )
    }
  }

}

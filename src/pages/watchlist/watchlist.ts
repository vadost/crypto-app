import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WatchlistProviders } from "../../providers/api/watchlist.providers";
import { Ticket, Watchlist } from "../../models/watchlist.interface";
import { Observable } from "rxjs/Observable";

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
  watchlist$: Observable<Watchlist>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private watchlistProviders: WatchlistProviders) {
    this.initializeItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WatchlistPage');
  }

  initializeItems() {
    this.watchlist$ = this.watchlistProviders.getWatchlist();
    let newObj = {};
    let newArray = [];
    this.watchlistProviders.getWatchlist2().subscribe(
      res => {
        console.log('res', res);
        res.map(elem => {
          newArray.push({id: elem.id, code: elem.name.toLocaleLowerCase().replace(/ /g, '_').replace(/\./g, '_')});
          // newObj[elem.symbol] = {'name': elem.name, 'symbol': elem.symbol, 'id': elem.id, 'slug': elem.slug}
        });
        console.log('newObj', newObj);
        console.log('newArray', JSON.stringify(newArray.sort(function(a, b) {return a.id - b.id;})));
      }
    );
  }

  getItems(ev) {
    // Reset items back to all of the items
    // this.initializeItems();
    //
    // // set val to the value of the ev target
    // let val = ev.target.value;
    //
    // // if the value is an empty string don't filter the items
    // if (val && val.trim() != '') {
    //   this.watchlist$ = this.watchlist$.filter((item) => {
    //     return (item.symbol.toLowerCase().indexOf(val.toLowerCase()) > -1);
    //   })
    // }
  }

}

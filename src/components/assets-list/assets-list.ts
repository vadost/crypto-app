import { Component, Input } from '@angular/core';
import { Watchlist } from "../../models/watchlist.interface";

/**
 * Generated class for the AssetsListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'assets-list',
  templateUrl: 'assets-list.html'
})
export class AssetsListComponent {
  @Input() watchlist: Watchlist;

  getItems(ev) {
    // // Reset items back to all of the items
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

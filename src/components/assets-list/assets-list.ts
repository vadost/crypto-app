import { Component, Input } from '@angular/core';
import { Ticker, TotalInfo } from "../../models/watchlist.interface";

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
  @Input() totalInfo: TotalInfo;
  @Input() tickers: Ticker[];
}

import { Component, Input } from '@angular/core';
import { Watchlist } from "../../models/watchlist.interface";

/**
 * Generated class for the TotalInfoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'total-info',
  templateUrl: 'total-info.html'
})
export class TotalInfoComponent {
  @Input() watchlist: Watchlist;
}

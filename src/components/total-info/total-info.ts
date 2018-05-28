import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TotalInfo } from "../../models/watchlist.interface";

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
  @Input() totalInfo: TotalInfo;
  @Output() searchItems = new EventEmitter<string>();
}

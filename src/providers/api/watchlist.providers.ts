import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Tickers } from "./mokups/tickers";
import { of } from "rxjs/observable/of";

@Injectable()
export class WatchlistProviders {

  constructor() {}

  getTotalInfo(): Observable<any> {
    // return this.apiProviders.get(`total-info/`);
    return of(Tickers.getTotalInfo());
  }

  getTickers(): Observable<any> {
    // return this.apiProviders.get(`tickers/`);
    return of(Tickers.getTickers());
  }
}

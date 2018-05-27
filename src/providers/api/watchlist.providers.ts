import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Tickers } from "./mokups/tickers";
import { of } from "rxjs/observable/of";

@Injectable()
export class WatchlistProviders {

  constructor() {}

  getWatchlist(): Observable<any> {
    // return this.apiProviders.get(`tickers/`);
    return of(Tickers.getTickers());
  }

  getWatchlist2(): Observable<any> {
    // return this.apiProviders.get(`tickers/`);
    return of(Tickers.getTickersMap());
  }
}

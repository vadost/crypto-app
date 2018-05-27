import { Component } from '@angular/core';

import { SettingsPage } from "../settings/settings";
import { WatchlistPage } from "../watchlist/watchlist";
import { FundsPage } from "../funds/funds";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = WatchlistPage;
  tab2Root = FundsPage;
  tab3Root = SettingsPage;

  constructor() {

  }
}

import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ApiProviders } from "./api/api.providers";
import { WatchlistProviders } from "./api/watchlist.providers";

@NgModule({
  imports: [
    HttpClientModule,
  ]
})
export class ProvidersModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ProvidersModule,
      providers: [
        ApiProviders,
        WatchlistProviders,
      ]
    };
  }
}

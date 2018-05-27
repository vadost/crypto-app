import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ApiService } from './api/api.service';
import { AssetsApiService } from './api/assets.api.service';
import { ExchangesApiService } from './api/exchanges.api.service';
import { SearchApiService } from './api/search.api.service';
import { UserApiService } from './api/user.api.service';
import { WindowService } from './window.service';

@NgModule({
  imports: [
    HttpClientModule,
  ]
})
export class ServicesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ServicesModule,
      providers: [
        ApiService,
        AssetsApiService,
        ExchangesApiService,
        SearchApiService,
        UserApiService,
        WindowService,
      ]
    };
  }
}

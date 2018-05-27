import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { WatchlistPage } from "../pages/watchlist/watchlist";
import { FundsPage } from "../pages/funds/funds";
import { SettingsPage } from "../pages/settings/settings";
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProvidersModule } from "../providers/providers.module";
import { SharedModule } from "../shared/shared.module";
import { WelcomePage } from "../pages/welcome/welcome";
import { SigninPage } from "../pages/signin/signin";
import { SignupPage } from "../pages/signup/signup";
import { ForgotPasswordPage } from "../pages/forgot-password/forgot-password";
import { ComponentsModule } from "../components/components.module";

@NgModule({
  declarations: [
    MyApp,
    WatchlistPage,
    FundsPage,
    SettingsPage,
    TabsPage,
    WelcomePage,
    SigninPage,
    SignupPage,
    ForgotPasswordPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ProvidersModule.forRoot(),
    SharedModule,
    ComponentsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    WatchlistPage,
    FundsPage,
    SettingsPage,
    WelcomePage,
    SigninPage,
    SignupPage,
    ForgotPasswordPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

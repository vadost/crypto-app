import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ForgotPasswordPage } from "../forgot-password/forgot-password";
import { SignupPage } from "../signup/signup";
import { TabsPage } from "../tabs/tabs";

/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  forgotPasswordPage = ForgotPasswordPage;
  signupPage = SignupPage;
  tabsPage = TabsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}

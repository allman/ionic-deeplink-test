import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SecondpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-secondpage',
  templateUrl: 'secondpage.html',
})
export class SecondpagePage {

  businessPage:string;
  email:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.businessPage = this.navParams.get('businessPage');
    this.email = this.navParams.get('email');
    console.log('ionViewDidLoad SecondpagePage');
  }

}

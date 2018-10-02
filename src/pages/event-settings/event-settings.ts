import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EventSettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event-settings',
  templateUrl: 'event-settings.html',
})
export class EventSettingsPage {
	event: any;

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.event = navParams.get('event');
	}

  ionViewDidLoad() {
  }

}

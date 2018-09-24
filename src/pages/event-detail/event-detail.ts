import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WsProvider } from '../../providers/ws/ws';

@IonicPage()
@Component({
  selector: 'page-event-detail',
  templateUrl: 'event-detail.html'
})
export class EventDetailPage {
	event: any;

	constructor(public navCtrl: NavController, navParams: NavParams, public ws: WsProvider ) {
		this.event = navParams.get('event')
	}

	ionViewDidLoad() {
	}



}

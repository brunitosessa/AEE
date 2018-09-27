import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WsProvider } from '../../providers/ws/ws';

@IonicPage()
@Component({
  selector: 'page-user-detail',
  templateUrl: 'user-detail.html'
})
export class UserDetailPage {
	user: any;
	events: any=[];

	constructor(public navCtrl: NavController, navParams: NavParams, public ws: WsProvider ) {
		this.user = navParams.get('user')
	}

        getPublicEvents() {
                this.ws.getMyEvents()
                .then(data => {
                        this.events = data;
                });
	}

	ionViewDidLoad() {
		this.getPublicEvents();
	}



}

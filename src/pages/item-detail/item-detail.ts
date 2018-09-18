import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WsProvider } from '../../providers/ws/ws';

@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
	user: any;
	events: any=[];

	constructor(public navCtrl: NavController, navParams: NavParams, public ws: WsProvider ) {
		this.user = navParams.get('user')
	}

        getPublicEvents() {
                this.ws.getPublicEvents()
                .then(data => {
                        this.events = data;
                });
	}

	ionViewDidLoad() {
		this.getPublicEvents();
	}



}

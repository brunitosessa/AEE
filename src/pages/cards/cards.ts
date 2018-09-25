import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, LoadingController } from 'ionic-angular';
import { WsProvider } from '../../providers/ws/ws';
import { Event } from '../../models/event';

@IonicPage()
@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html'
})
export class CardsPage {
	//La lista de eventos
	cardItems: any[];
	events: any;

	constructor(public navCtrl: NavController, public translateService: TranslateService, public loadingCtrl: LoadingController, public ws: WsProvider) {
		this.getMyEvents();
	}

	openEvent(event: Event) {
                this.navCtrl.push('EventDetailPage', {
                        event: event
                });
	}

	getMyEvents() {
		let loading = this.loadingCtrl.create({
			content:'Cargando amigos'
		});

		loading.present();

		this.ws.getPublicEvents()
		.then(data => {
			loading.dismiss();
			this.events = data;
		});	
	}
}

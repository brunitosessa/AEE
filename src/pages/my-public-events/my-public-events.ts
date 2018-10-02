import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, LoadingController } from 'ionic-angular';
import { WsProvider } from '../../providers/ws/ws';
import { Event } from '../../models/event';

@IonicPage()
@Component({
  selector: 'page-my-public-events',
  templateUrl: 'my-public-events.html'
})
export class MyPublicEventsPage {
	//La lista de eventos
	events: any;

	constructor(public navCtrl: NavController, public translateService: TranslateService, public loadingCtrl: LoadingController, public ws: WsProvider) {
	}

	ionViewDidLoad() {
		this.getMyPublicEvents();
	}

	openEvent(event: Event) {
                this.navCtrl.push('EventDetailPage', {
                        event: event
                });
	}

	getMyPublicEvents() {
		let loading = this.loadingCtrl.create({
			content:'Cargando eventos públicos'
		});

		loading.present();

		this.ws.getMyEvents(2)
		.then(data => {
			loading.dismiss();
			this.events = data;
		}).catch(e => {
			console.log(e);	
		});	
	}
}

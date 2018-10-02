import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, LoadingController } from 'ionic-angular';
import { WsProvider } from '../../providers/ws/ws';
import { Event } from '../../models/event';

@IonicPage()
@Component({
  selector: 'page-my-private-events',
  templateUrl: 'my-private-events.html'
})
export class MyPrivateEventsPage {
	//La lista de eventos
	events: any;

	constructor(public navCtrl: NavController, public translateService: TranslateService, public loadingCtrl: LoadingController, public ws: WsProvider) {
	}

	ionViewDidLoad() {
		this.getMyPrivateEvents();
	}

	openEvent(event: Event) {
                this.navCtrl.push('EventDetailPage', {
                        event: event
                });
	}

	getMyPrivateEvents() {
		let loading = this.loadingCtrl.create({
			content:'Cargando eventos privados'
		});

		loading.present();

		this.ws.getMyEvents(1)
		.then(data => {
			loading.dismiss();
			this.events = data;
		}).catch(e => {
			console.log(e);	
		});	
	}
}

import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, LoadingController } from 'ionic-angular';
import { WsProvider } from '../../providers/ws/ws';
import { Event } from '../../models/event';

@IonicPage()
@Component({
  selector: 'page-my-events',
  templateUrl: 'my-events.html'
})
export class MyEventsPage {
	//La lista de eventos
	events: any;

	constructor(public navCtrl: NavController, public translateService: TranslateService, public loadingCtrl: LoadingController, public ws: WsProvider) {
	}

	ionViewDidLoad() {
		this.getMyEvents();
	}

	openEvent(event: Event) {
                this.navCtrl.push('EventDetailPage', {
                        event: event
                });
	}

	getMyEvents() {
		let loading = this.loadingCtrl.create({
			content:'Cargando eventos'
		});

		loading.present();

		this.ws.getMyEvents()
		.then(data => {
			loading.dismiss();
			this.events = data;
		}).catch(e => {
			console.log(e);	
		});	
	}

	searchEvents(ev: any) {
		// set val to the value of the searchbar
		const val = ev.target.value;

		// if the value is an empty string don't filter the items
		if (val && val.trim() != '') {
			this.events = this.event.filter((event) => {
				return (event.nombre.toLowerCase().indexOf(val.toLowerCase()) > -1);
			})
		}
		else {
			this.getMyEvents();
		}

	}



}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { WsProvider } from '../../providers/ws/ws';

@IonicPage()
@Component({
  selector: 'page-user-detail',
  templateUrl: 'user-detail.html'
})
export class UserDetailPage {
	user: any;
	events: any;

	constructor(public navCtrl: NavController, navParams: NavParams, public ws: WsProvider, public loadingCtrl: LoadingController ) {
		this.user = navParams.get('user')
	}

	ionViewDidLoad() {
		this.getContactPublicEvents();
	}

	getContactPublicEvents() {
		let loading = this.loadingCtrl.create({
			content:'Cargando contacto'
		});
	
		loading.present();

                this.ws.getContactPublicEvents(this.user.id)
		.then(data => {
			loading.dismiss();
			this.events = data;
		});
	}

	//Abre el evento publico del amigo
	openEvent(event: Event) {
                this.navCtrl.push('EventDetailPage', {
                        event: event
                });
	}


}

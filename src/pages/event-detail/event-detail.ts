import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ModalController } from 'ionic-angular';
import { WsProvider } from '../../providers/ws/ws';
import { User } from '../../models/user';

@IonicPage()
@Component({
  selector: 'page-event-detail',
  templateUrl: 'event-detail.html'
})
export class EventDetailPage {
	//Los datos del evento que vienen de la lista de eventos
	event: any;
	detail: any;

	//Tab por defecto
	asistencia: any;

	constructor(public navCtrl: NavController, navParams: NavParams, public loadingCtrl: LoadingController, public modalCtrl: ModalController, public ws: WsProvider ) {
		//Trae los datos del evento de la lista de eventos
		this.event = navParams.get('event');

		//Selecciona la tab de titulares por defecto
		this.asistencia = 1;
	}

	ionViewDidLoad() {
		this.getDetailEventInfo();
	}

	//ABRE LA INFO DE UN USUARIO
	openUser(user: User) {
		this.navCtrl.push('UserDetailPage', {
			user: user
		});
	}

	//TRAER LA INFORMACION DETALLADA DEL EVENTO CON EL LOADER
	getDetailEventInfo() {
		let loading = this.loadingCtrl.create({
			content:'Cargando datos del evento'
		});

		loading.present();

		this.ws.getDetailEventInfo(this.event.id)
		.then(data => {
			loading.dismiss();
			this.detail = data;
                }).catch(e => {
                        console.log(e);
                });
	}

	//REFRESHER
	doRefresher(refresher) {
		this.getDetailEventInfo();
		refresher.complete();
	}

	clickSettings() {
	let settingsModal = this.modalCtrl.create('EventSettingsPage', { event: this.event });
		 settingsModal.present();
	}

}

import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { WsProvider } from '../../providers/ws/ws';
import { User } from '../../models/user';

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
	users: any=[];

	constructor(public navCtrl: NavController, public modalCtrl: ModalController, public ws: WsProvider) {
	}

	getUsers() {
		this.ws.getUsers()
		.then(data => {
			this.users = data;
		});
	}

	/**
	* The view loaded, let's query our items for the list
	*/
	ionViewDidLoad() {
		this.getUsers();
	}

	//Agregar contacto
	addItem() {
		let addModal = this.modalCtrl.create('ItemCreatePage');
		addModal.onDidDismiss(user => {
			if (user) {
				this.users.add(user);
			}
		})
		addModal.present();
	}

	deleteItem(user) {
		this.users.delete(user);
	}

	openItem(user: User) {
		this.navCtrl.push('ItemDetailPage', {
			user: user
		});
	}
}

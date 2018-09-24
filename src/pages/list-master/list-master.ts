import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, LoadingController } from 'ionic-angular';
import { WsProvider } from '../../providers/ws/ws';
import { User } from '../../models/user';

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
	users: any=[];

	constructor(public navCtrl: NavController, public modalCtrl: ModalController, public loadingCtrl: LoadingController, public ws: WsProvider) {
		this.getUsers();
	}

	getUsers() {
		let loading = this.loadingCtrl.create({
			content:'Cargando amigos'
		});

		loading.present();

		this.ws.getUsers()
		.then(data => {
			loading.dismiss();
			this.users = data;
		});
	}

	searchUsers(ev: any) {
		// set val to the value of the searchbar
		const val = ev.target.value;

		// if the value is an empty string don't filter the items
		if (val && val.trim() != '') {
			this.users = this.users.filter((user) => {
				return (user.nombre.toLowerCase().indexOf(val.toLowerCase()) > -1);
			})
		}
		else {
			this.getUsers();
		}

	}

	ionViewDidLoad() {

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

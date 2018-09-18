import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

	users: any = [];

	constructor(public navCtrl: NavController, public navParams: NavParams) { }

	getUsers(ev) {
		let val = ev.target.value;
		if (!val || !val.trim()) {
			this.users = [];
			return;
		}
		this.users = this.users.query({
			name: val
		});
	}
}

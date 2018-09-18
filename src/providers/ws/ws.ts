import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the WsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WsProvider {

	apiUrl = 'https://puntoslash.com.ar/desarrollo/ws/';

	constructor(public http: HttpClient) {
		console.log('Hello WsProvider Provider');
	}

	getUsers() {
		return new Promise(resolve => {
		this.http.post(this.apiUrl+'listaContactos.php', 
		{
			session_id: 274,
			token: "{8BE47EA0-1409-7EE9-4A90-CFD0B04FBE98}",
		})
			.subscribe(data => {
				resolve(data['amigos']);
			}, err => {
				console.log(err);
			});
		});
	}

	getPublicEvents() {
		return new Promise(resolve => {
			this.http.post(this.apiUrl+'listaEventos.php',
			{
				session_id: 274,
				token: "{8BE47EA0-1409-7EE9-4A90-CFD0B04FBE98}",
				lat: 15,
				lng: 14,
			},
			{
				headers: { 'Content-Type': 'application/json' }
			})
			.subscribe(data => {
				resolve(data['eventos']);
				console.log(data);			
			}, err => {
				console.log(err);
			});
		});
	}
}

import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Event } from '../../models/event';

import { Tab1Root, Tab2Root, Tab3Root } from '../';

@IonicPage()
@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html'
})
export class CardsPage {
	//Para las tabs
	tab1Root: any = Tab1Root;
	tab2Root: any = Tab2Root;
	tab3Root: any = Tab3Root;
	tab1Title = " ";
	tab2Title = " ";
	tab3Title = " ";

	
	//La lista de eventos
	cardItems: any[];

	constructor(public navCtrl: NavController, public translateService: TranslateService) {
		translateService.get(['TAB1_TITLE', 'TAB2_TITLE', 'TAB3_TITLE']).subscribe(values => {
			this.tab1Title = values['TAB1_TITLE'];
			this.tab2Title = values['TAB2_TITLE'];
			this.tab3Title = values['TAB3_TITLE'];
		});

		this.cardItems = [
		{
			user: {
				avatar: 'assets/img/marty-avatar.png',
				name: 'Fulbito de los pibes'
			},
				date: 'Miércoles 5 de Noviembre, 22:00 hs',
				image: 'assets/img/advance-card-bttf.png',
				content: 'La cancha de pepe',
				address: 'Calle 8 numer 1333, La Plata',
				status: 'El evento se juega y está completo',
		},
		{
			user: {
				avatar: 'assets/img/sarah-avatar.png.jpeg',
				name: 'Sarah Connor'
			},
				date: 'May 12, 1984',
				image: 'assets/img/advance-card-tmntr.jpg',
				content: 'I face the unknown future, with a sense of hope. Because if a machine, a Terminator, can learn the value of human life, maybe we can too.'
		},
		];
	}

	openEvent(event: Event) {
                this.navCtrl.push('EventDetailPage', {
                        event: event
                });
        }
}

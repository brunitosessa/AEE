import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-my-events-tabs',
  templateUrl: 'my-events-tabs.html'
})
export class MyEventsTabsPage {
  tab1Root: any = 'MyEventsPage';
  tab2Root: any = 'MyPrivateEventsPage';
  tab3Root: any = 'MyPublicEventsPage';

  constructor(public navCtrl: NavController, public translateService: TranslateService) {
  }
}

import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { MyEventsTabsPage } from './my-events-tabs';

@NgModule({
  declarations: [
    MyEventsTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyEventsTabsPage),
    TranslateModule.forChild()
  ],
  exports: [
    MyEventsTabsPage
  ]
})
export class MyEventsTabsPageModule { }

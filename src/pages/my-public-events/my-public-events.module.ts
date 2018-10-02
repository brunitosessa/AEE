import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { MyPublicEventsPage } from './my-public-events';

@NgModule({
  declarations: [
    MyPublicEventsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyPublicEventsPage),
    TranslateModule.forChild()
  ],
  exports: [
    MyPublicEventsPage
  ]
})
export class MyPublicEventsPageModule { }

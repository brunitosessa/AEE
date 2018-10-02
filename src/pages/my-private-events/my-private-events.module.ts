import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { MyPrivateEventsPage } from './my-private-events';

@NgModule({
  declarations: [
    MyPrivateEventsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyPrivateEventsPage),
    TranslateModule.forChild()
  ],
  exports: [
    MyPrivateEventsPage
  ]
})
export class MyPrivateEventsPageModule { }

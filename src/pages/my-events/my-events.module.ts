import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { MyEventsPage } from './my-events';

@NgModule({
  declarations: [
    MyEventsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyEventsPage),
    TranslateModule.forChild()
  ],
  exports: [
    MyEventsPage
  ]
})
export class MyEventsPageModule { }

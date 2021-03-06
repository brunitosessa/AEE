import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateService } from '@ngx-translate/core';
import { Config, Nav, Platform } from 'ionic-angular';

import { FirstRunPage } from '../pages';
import { Settings } from '../providers';

@Component({
template: `<ion-menu [content]="content">
		<ion-header>
			<ion-item>
				<ion-avatar item-start>
					<img src="https://puntoslash.com.ar/desarrollo/images/usuarios/cariverplate77@gmail.com.png">
				</ion-avatar>
				<h2>Bruno Sessa</h2>
				<p>cariverplate77@gmail.com</p>
			</ion-item>

		</ion-header>

		<ion-content margin-top>
			<ion-list *ngFor='let p of pages' (click)="openPage(p)" menuClose>
				<ion-item>
					<ion-icon name="{{ p.image }}" item-start></ion-icon>
					{{p.title}}
				</ion-item>
			</ion-list>
		</ion-content>

		<ion-footer>
			<button ion-button full icon-start>
				<ion-icon name="log-out"></ion-icon>
				Cerrar sesion
			</button>
		</ion-footer>
		
	</ion-menu>
<ion-nav #content [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = FirstRunPage;

  @ViewChild(Nav) nav: Nav;

  pages: any[] = [
    { title: 'Tutorial', component: 'TutorialPage', image: 'more' },
    { title: 'Welcome', component: 'WelcomePage', image: 'leaf' },
    { title: 'Mis eventos', component:'MyEventsTabsPage', image: 'calendar'},
    { title: 'Eventos públicos', component: 'MyEventsPage', image: 'globe' },
    { title: 'Amigos', component: 'ListMasterPage', image: 'contacts' },
    { title: 'Notificaciones', component: 'CardsPage', image: 'notifications' },
    { title: 'Perfil', component: 'CardsPage', image: 'settings' },
    { title: 'Content', component: 'ContentPage' },
    { title: 'Login', component: 'LoginPage' },
    { title: 'Signup', component: 'SignupPage' },
    { title: 'Menu', component: 'MenuPage' },
    { title: 'Settings', component: 'SettingsPage' },
    { title: 'Search', component: 'SearchPage' }
  ]

  constructor(private translate: TranslateService, platform: Platform, settings: Settings, private config: Config, private statusBar: StatusBar, private splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.initTranslate();
  }

  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();

    if (browserLang) {
      if (browserLang === 'zh') {
        const browserCultureLang = this.translate.getBrowserCultureLang();

        if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
          this.translate.use('zh-cmn-Hans');
        } else if (browserCultureLang.match(/-TW|CHT|Hant/i)) {
          this.translate.use('zh-cmn-Hant');
        }
      } else {
        this.translate.use(this.translate.getBrowserLang());
      }
    } else {
      this.translate.use('en'); // Set your language here
    }

    this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

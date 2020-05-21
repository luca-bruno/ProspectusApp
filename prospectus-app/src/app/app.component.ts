import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ProspectusService } from './services/prospectus.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = -1;
  public appPages = [
    {
      title: 'Institutes & Courses',
      url: 'institutes/select',
      icon: 'school'
    },
    {
      title: 'Student Testimonials',
      url: 'testimonials',
      icon: 'people'
    },
    {
      title: 'Past Students\' Work',
      url: 'pastwork/select',
      icon: 'medal'
    },
    {
      title: 'Corporate Services',
      url: 'corporate-services',
      icon: 'call'
    },
    {
      title: 'Favourite Courses',
      url: 'favourite-courses',
      icon: 'heart'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,

    private prospectusService: ProspectusService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  // async will make the app wait until the data is loaded.
  async ngOnInit() {
    await this.prospectusService.preload();
    }
}

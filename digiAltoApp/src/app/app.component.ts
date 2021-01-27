import {Component, OnInit} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {Router, RouterEvent} from '@angular/router';

@Component( {
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: [ 'app.component.scss' ]
} )
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: 'home',
      icon: 'home'
    },
    {
      title: 'Case Studies',
      url: 'casestudies',
      icon: 'heart'
    },
    {
      title: 'Contact Us',
      url: 'contactus',
      icon: 'archive'
    },
    {
      title: 'About Us',
      url: 'aboutus',
      icon: 'trash'
    },
    {
      title: 'Feed Back',
      url: 'feedback',
      icon: 'warning'
    }
  ];
  activePath: any;
  pages: {title: string; url: string; icon: string;}[];
  page: {title: string; url: string; icon: string;};
  title: string;

  constructor (
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then( () => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    } );
  }

  ngOnInit() {


    this.router.events.subscribe( ( event: RouterEvent ) => {

      if ( event && event.url ) {
        this.activePath = event.url;
        console.log( this.activePath );

        this.pages = this.appPages;


      }

    } );

  }
}

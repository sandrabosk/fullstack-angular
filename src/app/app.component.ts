import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SessionService } from './services/session.service';

declare var $:any;
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})

export class AppComponent implements OnInit{

  isLoggedIn: boolean = false;


    constructor(private elRef:ElementRef,
                private mySession: SessionService,
                private myRouter: Router ) {}

    ngOnInit(){

      this.mySession.loggedIn$.subscribe((userFromApi) => {
        this.isLoggedIn = true;
    });
//=====================
      this.mySession.checkLogin()
        // if logged in, redirect to /lists
        .then((userInfo) => {
            this.myRouter.navigate(['/dashboard']);
            this.isLoggedIn = true;
        })
        // else redirect to /
        .catch((err) => {
            this.myRouter.navigate(['/pages/login']);
        });

//=====================

        let body = document.getElementsByTagName('body')[0];
        var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows){
           // if we are on windows OS we activate the perfectScrollbar function
            body.classList.add("perfect-scrollbar-on");
        } else {
            body.classList.add("perfect-scrollbar-off");
        }
        $.material.init();
    }

    logMeOut() {
      this.mySession.logout()
        .then(() => {
            this.myRouter.navigate(['/']);
            this.isLoggedIn = false;
        })
        .catch(() => {});
      }

}

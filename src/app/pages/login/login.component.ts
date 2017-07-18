import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SessionService } from '../../services/session.service';

declare var $:any;

@Component({
    moduleId:module.id,
    selector: 'login-cmp',
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit{

    test : Date = new Date();

    formEmail: string;
    formPassword: string;

    errorMessage: string;

    constructor(
        private mySession: SessionService,
        private myRouter: Router
      ) { }

    checkFullPageBackgroundImage(){
        var $page = $('.full-page');
        var image_src = $page.data('image');

        if(image_src !== undefined){
            var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>'
            $page.append(image_container);
        }
    };
    ngOnInit(){
        this.checkFullPageBackgroundImage();

        setTimeout(function(){
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700)
    }

    submitLogin() {
          this.mySession.login(this.formEmail, this.formPassword)
            .then((userFromApi) => {
                this.myRouter.navigate(['/dashboard']);
                this.mySession.loggedIn(userFromApi);
            })
            .catch((errResponse) => {
                const apiInfo = errResponse.json();
                this.errorMessage = apiInfo.message;
            });
      }



}

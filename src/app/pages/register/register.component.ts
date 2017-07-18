//this is the sign up component:

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SessionService } from '../../services/session.service';

declare var $:any;

@Component({
    moduleId:module.id,
    selector: 'register-cmp',
    templateUrl: './register.component.html'
})

export class RegisterComponent implements OnInit{

    test : Date = new Date();

    newUser: any = {};

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
    }

    submitSignup() {
    this.mySession.signup(this.newUser)
      .then((userFromApi) => {
          this.myRouter.navigate(['/dashboard']);
          this.mySession.loggedIn(userFromApi);
      })
      .catch((errResponse) => {
          const apiInfo = errResponse.json();
          this.errorMessage = apiInfo.message;
      })
}


}

import { Component, OnInit, state,style,animate,transition, trigger, keyframes } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SessionService } from '../services/session.service';

@Component({
    moduleId: module.id,
    selector: 'user-cmp',
    templateUrl: 'user.component.html',
    providers:[ SessionService ],
    animations: [
        trigger('carduserprofile', [
            state('*', style({
                '-ms-transform': 'translate3D(0px, 0px, 0px)',
                '-webkit-transform': 'translate3D(0px, 0px, 0px)',
                '-moz-transform': 'translate3D(0px, 0px, 0px)',
                '-o-transform':'translate3D(0px, 0px, 0px)',
                transform:'translate3D(0px, 0px, 0px)',
                opacity: 1
            })),
            transition('void => *', [
                style({opacity: 0,
                    '-ms-transform': 'translate3D(0px, 150px, 0px)',
                    '-webkit-transform': 'translate3D(0px, 150px, 0px)',
                    '-moz-transform': 'translate3D(0px, 150px, 0px)',
                    '-o-transform':'translate3D(0px, 150px, 0px)',
                    transform:'translate3D(0px, 150px, 0px)',
                }),
                animate('0.3s 0s ease-out'),
            ])
        ]),
        trigger('cardprofile', [
            state('*', style({
                '-ms-transform': 'translate3D(0px, 0px, 0px)',
                '-webkit-transform': 'translate3D(0px, 0px, 0px)',
                '-moz-transform': 'translate3D(0px, 0px, 0px)',
                '-o-transform':'translate3D(0px, 0px, 0px)',
                transform:'translate3D(0px, 0px, 0px)',
                opacity: 1})),
                transition('void => *', [
                    style({opacity: 0,
                        '-ms-transform': 'translate3D(0px, 150px, 0px)',
                        '-webkit-transform': 'translate3D(0px, 150px, 0px)',
                        '-moz-transform': 'translate3D(0px, 150px, 0px)',
                        '-o-transform':'translate3D(0px, 150px, 0px)',
                        transform:'translate3D(0px, 150px, 0px)',
                    }),
                    animate('0.3s 0.25s ease-out')
                ])
            ])
        ]
    })

    export class UserComponent implements OnInit{

      public user : Object = {};
      public updatedUser: Object = {};
      public firstName: String;
      public lastName: String;
      public email: String;
      public dob = new Date();
      public genders = [
          { value: 'f', display: 'Female' },
          { value: 'm', display: 'Male' }
        ];
      public fav: String;
      public profession: String;

      constructor(
        private mySession: SessionService,
        private myRoute: ActivatedRoute,
        private myRouter: Router
 ){}

      ngOnInit() {
        this.mySession.checkLogin().then(( userInfo )=> {
          console.log(userInfo);
          return this.user = userInfo;

        });
      }
      updateUser(formData){
        this.firstName = formData.form.controls.formFirstName._value;
        this.lastName = formData.form.controls.formLastName._value;
        this.email = formData.form.controls.formEmail._value;
        this.dob = formData.form.controls.formDob._value;
        this.fav = formData.form.controls.formFav._value;
        this.profession = formData.form.controls.formProfession._value;
        this.sendUpdatedInfoToApi();
      }

      sendUpdatedInfoToApi(){
        this.updatedUser={
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          dob: this.dob,
          profession: this.profession,
          fav: this.fav
        }
        console.log('updated user:' , this.updatedUser )
        this.mySession.update(this.updatedUser);
      }

    }

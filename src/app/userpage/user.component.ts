import { Component, OnInit, ElementRef, state,style,animate,transition, trigger, keyframes } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http, Response } from '@angular/http';
import { SessionService } from '../services/session.service';
import 'rxjs/add/operator/toPromise';


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
      public gender = [
          { value: 'f', display: 'Female' },
          { value: 'm', display: 'Male' }
        ];
      public profession: String;
      public fav: String;
      public about: String;

      constructor(
        private mySession: SessionService,
        private myRoute: ActivatedRoute,
        private myRouter: Router,
        private myHttp:Http,
        private el: ElementRef
 ){}

      ngOnInit() {
        this.mySession.checkLogin().then(( userInfo )=> {
          console.log(userInfo);
          return this.user = userInfo;

        });
      }
      updateUser(formData){
        console.log('formGender',formData.form.controls.formGender._value)
        this.firstName = formData.form.controls.formFirstName._value;
        this.lastName = formData.form.controls.formLastName._value;
        this.email = formData.form.controls.formEmail._value;
        this.dob = formData.form.controls.formDob._value;
        this.gender = formData.form.controls.formGender._value;
        this.fav = formData.form.controls.formFav._value;
        this.profession = formData.form.controls.formProfession._value;
        this.about = formData.form.controls.formAbout._value;

        this.sendUpdatedInfoToApi();
      }

      sendUpdatedInfoToApi(){
        this.updatedUser={
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          dob: this.dob,
          gender: this.gender,
          profession: this.profession,
          fav: this.fav,
          about: this.about
        }
        console.log('updated user:' , this.updatedUser )
        this.mySession.update(this.updatedUser);
      }

      
// this is the function that updates the user image only
      submit(){
        console.log("SUBMITTING FORM")

        let inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#file'); //#file==> give me the element with the id file
        let form = new FormData(); //creatingan empty form
        form.append('file', inputEl.files.item(0)); //attaching the elements

        console.log('FORM' , form);

        // this.uploader.uploadAll();
         this.myHttp.post(`http://localhost:3000/api/uploadphoto`, form)
          .toPromise()
          .then((apiResponse)=>{});
      }
    }

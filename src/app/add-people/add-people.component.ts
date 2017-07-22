import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TravelplansService } from '../services/travelplans.service';
import { SessionService } from '../services/session.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-add-people',
  templateUrl: './add-people.component.html',
  styleUrls: ['./add-people.component.css']
})
export class AddPeopleComponent implements OnInit {
  // @Output () onAddPeople = new EventEmitter<Object>();

  public travelplan: Object;
  public user;
  // public id;
  public users: any[] = [];
  public errorMessage: string = '';
  public list: {firstName: string, lastName: string}[] = [];

  constructor(
    private myTravelplansService: TravelplansService,
    private mySessionService: SessionService,
    private myRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.mySessionService.getUsersList()
      .then((usersList)=>{
        this.users = usersList;
      })
      .catch((err)=>{
        this.errorMessage = 'Displaying users went wrong.'
      })
      this.myRoute.params.subscribe((params)=>{
        this.getTravelplanDetails(params['id']);
      });
  }
  getTravelplanDetails(id) {
    this.myTravelplansService.get(id)
      .then((theTravelplanDetails) => {
        this.travelplan = theTravelplanDetails;
      })
      .catch((err) => {
        this.errorMessage = 'Could not retrieve travelplan details. Sorry.';
      });
  }

  pushTheUser(travelplan, user){

    this.myTravelplansService.addPersonToList(travelplan, user)
      .then((addedUser)=>{
        this.user = addedUser;
      })
      .catch((err)=>{
        this.errorMessage = 'There has been an error so person is not added.'
      })
  }

// addToList(user,id){
//     // this.list.push(user);
//     this.mySessionService.addThePerson(this.person, id)
//     .then((addedPerson) => {
//       this.person = addedPerson;
//     })
//     .catch((err)=>{
//       this.errorMessage = 'There has been an error so person is not added.'
//     })
//       }

}

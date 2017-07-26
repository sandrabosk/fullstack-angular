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

 @Input() travelplan: any;
  public user;
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
      console.log('travelplan', this.travelplan);
    this.myRoute.params.subscribe((params)=>{
      this.getTravelplanDetails(params['id']);
      console.log('paramsId from add user', params['id'])
    });
  }
  getTravelplanDetails(id) {
    this.myTravelplansService.get(id)
      .then((theTravelplanDetails) => {
        this.travelplan = theTravelplanDetails;
        console.log("PLAN", this.travelplan);
      })
      .catch((err) => {
        this.errorMessage = 'Could not retrieve travelplan details. Sorry.';
      });
  }

  pushTheUser(travelplan, user) {

    this.myTravelplansService.addPersonToList(travelplan, user)
      .then((res)=>{
        this.travelplan.travelFriends.push(res.data);
      })
      .catch((err)=>{
        this.errorMessage = 'There has been an error so person is not added.'
      })
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TravelplansService } from '../services/travelplans.service';
import { SessionService } from '../services/session.service';


@Component({
  selector: 'app-add-people',
  templateUrl: './add-people.component.html',
  styleUrls: ['./add-people.component.css']
})
export class AddPeopleComponent implements OnInit {
  // @Output () onAddPeople = new EventEmitter<Object>();


  public users: any[] = [];
  public errorMessage: string = '';
  public list: {firstName: string, lastName: string}[] = [];

  constructor(
    private myTravelplansService: TravelplansService,
    private mySessionService: SessionService
  ) { }

  ngOnInit() {
    this.mySessionService.getUsersList()
      .then((usersList)=>{
        this.users = usersList;
      })
      .catch((err)=>{
        this.errorMessage = 'Displaying users went wrong.'
      })
  }

addToList(user){
    this.list.push(user);
  }


}

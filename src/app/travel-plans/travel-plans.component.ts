import { Component, OnInit } from '@angular/core';
import { TravelplansService } from '../services/travelplans.service';


@Component({
  selector: 'app-travel-plans',
  templateUrl: './travel-plans.component.html',
  styleUrls: ['./travel-plans.component.css']
})
export class TravelPlansComponent implements OnInit {

  public travelplans: any[]=[];
  public errorMessage: string = '';

  constructor(
    private myTravelplansService: TravelplansService
  ) { }

  ngOnInit() {
    this.myTravelplansService.getTravelplansList()
      .then((travelplansList)=>{
        this.travelplans = travelplansList;
      })
      .catch((err)=>{
        this.errorMessage = 'Displaying travel plans went wrong.'
      })
  }

  

}

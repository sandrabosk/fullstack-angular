import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { TravelPlansComponent } from '../travel-plans/travel-plans.component';
import { TravelplansService } from '../services/travelplans.service';

@Component({
  selector: 'app-travelplan-details',
  templateUrl: './travelplan-details.component.html',
  styleUrls: ['./travelplan-details.component.css']
})

export class TravelplanDetailsComponent implements OnInit {

  travelplan: Object;
  errorMessage: string = '';
  show: boolean = false;


  constructor(
    private myRoute: ActivatedRoute,
    private myTravelplansService: TravelplansService,
    private myRouter: Router
  ) { }

  ngOnInit() {
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

  deleteTravelplan(){
    console.log('something here')
    if (!window.confirm('Are you sure?')) {
      return;
    }
    this.myTravelplansService.remove(this.travelplan['_id'])
      .then(()=>{
        console.log('=============================')
        this.myRouter.navigate(['/']);
      })
      .catch((err)=>{
        this.errorMessage = 'There has been an error so this travel plan is not deleted.'
      })
  }

showThis() {
    this.show = !this.show;
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TravelPlansComponent } from '../travel-plans/travel-plans.component';
import { FullScreenMapsComponent } from '../maps/fullscreenmap/fullscreenmap.component';
import { MapsComponent } from '../maps/maps.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { TravelplansService } from '../services/travelplans.service';

declare var $:any;
declare var swal:any;
declare var type: any;
@Component({
  selector: 'app-travelplan-details',
  templateUrl: './travelplan-details.component.html',
  styleUrls: ['./travelplan-details.component.css'],
})

export class TravelplanDetailsComponent implements OnInit {

  @Output() onAddToList = new EventEmitter<Object>();
  travelplan: Object;
  errorMessage: string = '';
  show: boolean = false;

//fancy alert pop up

// showSwal(){
//   // if(type = 'warning-message-and-cancel'){
//     swal({
//             title: 'Are you sure?',
//             text: 'You will not be able to recover this imaginary file!',
//             type: 'warning',
//             showCancelButton: true,
//             confirmButtonText: 'Yes, delete it!',
//             cancelButtonText: 'No, keep it',
//             confirmButtonClass: "btn btn-success",
//             cancelButtonClass: "btn btn-danger",
//             buttonsStyling: false
//         }).then(function() {
//           swal({
//             title: 'Deleted!',
//             text: 'Your imaginary file has been deleted.',
//             type: 'success',
//             confirmButtonClass: "btn btn-success",
//             buttonsStyling: false
//             })
//         },
//         function(dismiss) {
//           // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
//           if (dismiss === 'cancel') {
//             swal({
//               title: 'Cancelled',
//               text: 'Your imaginary file is safe :)',
//               type: 'error',
//               confirmButtonClass: "btn btn-info",
//               buttonsStyling: false
//             })
//           }
//         }
//     )
// }




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
    } else {
    this.myTravelplansService.remove(this.travelplan['_id'])
      .then(()=>{
        console.log('=============================')
        this.myRouter.navigate(['/']);
      })
      .catch((err)=>{
        this.errorMessage = 'There has been an error so this travel plan is not deleted.'
      })
    }
  }

showThis() {
    this.show = !this.show;
  }

}

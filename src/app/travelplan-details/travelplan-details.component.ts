import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TravelPlansComponent } from '../travel-plans/travel-plans.component';
import { FullScreenMapsComponent } from '../maps/fullscreenmap/fullscreenmap.component';
import { MapsComponent } from '../maps/maps.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { TravelplansService } from '../services/travelplans.service';
import { SessionService } from '../services/session.service';

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

  public updatedTravelplan: Object = {};
  public name: String;
  public country: String;
  public city: String;
  public startDate = new Date();
  public endDate = new Date();
  public transportation: String;
  public accomodation = {
    acAddress: '',
    expense: ''
  };

  constructor(
    private myRoute: ActivatedRoute,
    private mySession: SessionService,
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

  updateTravelPlan(tpId, formData){
    console.log('tpid',tpId )
    console.log(formData);
    this.name = formData.form.controls.formTpName._value;
    this.country = formData.form.controls.formCountry._value;
    this.city = formData.form.controls.formCity._value;
    this.startDate = formData.form.controls.formStart._value;
    this.endDate = formData.form.controls.formEnd._value;
    this.transportation = formData.form.controls.formTransportation._value;
    this.accomodation.acAddress = formData.form.controls.formAccAddr._value;
    this.accomodation.expense = formData.form.controls.formAccExpense._value;
    this.sendUpdatedTravelplanToApi(tpId);
  }
  sendUpdatedTravelplanToApi(tpId){
    this.updatedTravelplan = {
      name: this.name,
      country:this.country,
      city: this.city,
      startDate: this.startDate,
      endDate: this.endDate,
      transportation: this.transportation,
      acAddress: this.accomodation.acAddress,
      expense: this.accomodation.expense
    }
    console.log('===== updated travelplan ======', this.updatedTravelplan)
    this.myTravelplansService.updateTp(tpId,this.updatedTravelplan)
      .then(()=>{
        this.myRouter.navigate(['/travelplans'])
      })
      .catch(()=>{})
  }

showThis() {
    this.show = !this.show;
  }

}

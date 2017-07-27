// import { Component, OnInit } from '@angular/core';
//
// @Component({
//   selector: 'fullscreen-map-cmps',
//   templateUrl: './fullscreenmap.component.html',
//   styleUrls: ['./fullscreenmap.component.css']
// })
// export class FullscreenmapComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit() {
//   }
//
// }


declare var google:any;

import {Component, OnInit,AfterViewInit,Input, Output, EventEmitter, trigger,state,style,transition,animate,keyframes} from '@angular/core';
import { TravelplansService } from '../../services/travelplans.service';
import { SessionService } from '../../services/session.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


	interface marker {
		lat: number;
		lng: number;
		label?: string;
		draggable?: boolean;
	}
	@Component({
	    moduleId: module.id,
	    selector: 'fullscreen-map-cmps',
	    templateUrl: 'fullscreenmap.component.html',
	    animations: [
	        trigger('maps', [
	            state('*', style({
	                opacity: 1})),
	                transition('void => *', [
	                    style({opacity: 0,
	                    }),
	                    animate('1s 0s ease-out')
	                ])
	        ])
	    ]
	})

export class FullscreenmapComponent implements OnInit{

	@Input() theTravelplan: any;

	public travelplan: Object;
	public location: string;
	public formAttrName: string;
	public address: string;
	public formAttrAbout: string;
	public errorMessage: string = '';


	constructor(
		private myRouter: Router,
		private myRoute: ActivatedRoute,
		private mySessionService: SessionService,
		private myTravelplansService: TravelplansService
	){}

    ngOnInit(){

			this.myRoute.params.subscribe((params)=>{
				this.getTheDetails(params['id']);
				console.log('paramsId', params['id'])
			});

		//GOOGLE MAPS THINGS:
		console.log('init')
		var mapComponent = this;
		var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
        var mapOptions = {
            zoom: 13,
            center: myLatlng,
            scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
            styles: [{"featureType":"water","stylers":[{"saturation":43},{"lightness":-11},{"hue":"#0088ff"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"},{"saturation":-100},{"lightness":99}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#808080"},{"lightness":54}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ece2d9"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#ccdca1"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#767676"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#b8cb93"}]},{"featureType":"poi.park","stylers":[{"visibility":"on"}]},{"featureType":"poi.sports_complex","stylers":[{"visibility":"on"}]},{"featureType":"poi.medical","stylers":[{"visibility":"on"}]},{"featureType":"poi.business","stylers":[{"visibility":"simplified"}]}]
        }
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        var marker = new google.maps.Marker({
            position: myLatlng,
            title:"Hello World!"
        });
        // To add the marker to the map, call setMap();
        marker.setMap(map);


				//added for search through map
				function initMap() {
					console.log('callback')

				  var map = new google.maps.Map(document.getElementById('map'), {
				    center: {lat: -33.8688, lng: 151.2195},
				    zoom: 13
				  });

				  var card = document.getElementById('pac-card');
				  var input = document.getElementById('pac-input');
				  var types = document.getElementById('type-selector');
				  // var strictBounds = document.getElementById('strict-bounds-selector');

				  // map.controls[google.maps.ControlPosition.TOP_RIGHT].push(card);

				  var autocomplete = new google.maps.places.Autocomplete(input);

				  // Bind the map's bounds (viewport) property to the autocomplete object,
				  // so that the autocomplete requests use the current map bounds for the
				  // bounds option in the request.
				  autocomplete.bindTo('bounds', map);

				  var infowindow = new google.maps.InfoWindow();
				  var infowindowContent = document.getElementById('infowindow-content');
				  infowindow.setContent(infowindowContent);
				  var marker = new google.maps.Marker({
				    map: map,
				    anchorPoint: new google.maps.Point(0, -29)
				  });

				  autocomplete.addListener('place_changed', function() {
				    infowindow.close();
				    marker.setVisible(false);
				    var place = autocomplete.getPlace();
				    if (!place.geometry) {
				      // User entered the name of a Place that was not suggested and
				      // pressed the Enter key, or the Place Details request failed.
				      window.alert("No details available for input: '" + place.name + "'");
				      return;
				    }

				    // If the place has a geometry, then present it on a map.
				    if (place.geometry.viewport) {
				      map.fitBounds(place.geometry.viewport);
				    } else {
				      map.setCenter(place.geometry.location);
				      map.setZoom(17);  // Why 17? Because it looks good.
				    }
				    marker.setPosition(place.geometry.location);
				    marker.setVisible(true);

				    var address = '';
				    if (place.address_components) {
				      address = [
				        (place.address_components[0] && place.address_components[0].short_name || ''),
				        (place.address_components[1] && place.address_components[1].short_name || ''),
				        (place.address_components[2] && place.address_components[2].short_name || '')
				      ].join(' ');
				    }

						mapComponent.address = address;
				    infowindowContent.children['place-icon'].src = place.icon;
				    infowindowContent.children['place-name'].textContent = place.name;
				    infowindowContent.children['place-address'].textContent = address;
				    infowindow.open(map, marker);
				  });

				  // Sets a listener on a radio button to change the filter type on Places
				  // Autocomplete.
				  function setupClickListener(id, types) {
				    var radioButton = document.getElementById(id);
				    radioButton.addEventListener('click', function() {
				      autocomplete.setTypes(types);
				    });
				  }

				  setupClickListener('changetype-all', []);
				  setupClickListener('changetype-address', ['address']);
				  setupClickListener('changetype-establishment', ['establishment']);
				  // setupClickListener('changetype-geocode', ['geocode']);

				}
				initMap();

	}

	getTheDetails(id) {
		this.myTravelplansService.getDetails(id)
			.then((theTravelplanDetails) => {
				this.travelplan = theTravelplanDetails;
			})
			.catch((err) => {
				this.errorMessage = 'Could not retrieve travelplan details. Sorry.';
			});
	}


	submitLocation(planId, formData){
		// console.log('form data from map', formData)
		// console.log('address', this.address)
		// console.log('planId', planId)
			this.myTravelplansService.submitTheLocation(planId,formData, this.address)
				.then((res)=>{
					this.theTravelplan.tourAttractions.push(res.new);
					// this.myRouter.navigate([`/travelplans/${planId}/maplocations`])
				})
				.catch((err)=>{
	        this.errorMessage = 'There has been an error so person is not added.'
	      })
			// alert(this.formAttrAbout);
	}


}
// this.formAttrName, this.address, this.formAttrCity, this.formAttrCountry, this.formAttrAbout

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { environment } from '../../environments/environment';

  @Injectable()
  export class TravelplansService {

  baseUrl: string = environment.apiUrl;
  public planId;


  constructor(
    private myHttp: Http
  ) { }


    getTravelplansList() {
        return this.myHttp
          .get(this.baseUrl + '/api/travelplans',
            { withCredentials: true }
          )
          .toPromise()
          .then(apiResponse => apiResponse.json());
    }

    get(id){
      return this.myHttp
        .get(`${this.baseUrl}/api/travelplans/${id}`,
          { withCredentials: true }
        )
        .toPromise()
        .then(apiResponse => apiResponse.json())
    }

    createNew(dataToSend){
      return this.myHttp
        .post(this.baseUrl + '/api/travelplans',
          dataToSend,
          { withCredentials: true }
        )
        .toPromise()
        .then(apiResponse => apiResponse.json());
    }

    remove(id){
      console.log('=============================')
      return this.myHttp
        .delete(`${this.baseUrl}/api/travelplans/${id}`,
          { withCredentials: true }
        )
        .toPromise()
        .then(apiResponse => apiResponse.json());
    }

    addPersonToList(planId, user){
      var usersid =  { id:user._id} ;
      return this.myHttp
        .post(`${this.baseUrl}/api/travelplans/${planId}/addfriends`,
          usersid,
          { withCredentials: true }
        )
        .toPromise()
        .then(apiResponse => apiResponse.json());

    }

    getDetails(id){
      return this.myHttp
        .get(`${this.baseUrl}/api/travelplans/${id}/maplocations`,
          { withCredentials: true }
        )
        .toPromise()
        .then(apiResponse => apiResponse.json());
    }

    submitTheLocation(planId, dataToSend, address){
      console.log("NHGFCVBNJUYTRESDBHUYTRESDVBHYTRDCVBHYTFVBNJUYTRDVBHYT")
      return this.myHttp
        .post(`${this.baseUrl}/api/travelplans/${planId}`,
          {
            address: address,
            name: dataToSend.form.controls.formAttrName._value,
            about: dataToSend.form.controls.formAttrAbout._value
          },
          { withCredentials: true }
        )
        .toPromise()
        .then(apiResponse => apiResponse.json());
    }


  }

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { environment } from '../../environments/environment';

@Injectable()
export class CustomPlansService {
  baseUrl: string = environment.apiUrl;


  constructor(
    private myHttp: Http
  ) { }

  getCustomplansList() {
      return this.myHttp
        .get(this.baseUrl + '/api/customplans',
          { withCredentials: true }
        )
        .toPromise()
        .then(apiResponse => apiResponse.json());
  }

}

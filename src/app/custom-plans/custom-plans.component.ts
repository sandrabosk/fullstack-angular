import { Component, OnInit } from '@angular/core';
import { CustomPlansService } from '../services/customplans.service';


@Component({
  selector: 'app-custom-plans',
  templateUrl: './custom-plans.component.html',
  styleUrls: ['./custom-plans.component.css']
})
export class CustomPlansComponent implements OnInit {

  public customplans: any[]=[];
  public errorMessage: string = '';

  constructor(
    private myCustomPlansService: CustomPlansService
  ) { }

  ngOnInit() {
    this.myCustomPlansService.getCustomplansList()
      .then((customPlansList)=>{
        this.customplans = customPlansList
      })
      .catch((err)=>{
        this.errorMessage = 'Displaying custom plans went wrong.'
      })
  }

}

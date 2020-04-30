import { Component, OnInit } from '@angular/core';
import { PatientConditionService } from './shared/PatientCondition.service';
import * as _ from 'lodash';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  private conditionsList: any = [];
  private patientDemograpics: any = [];
  private hasError:boolean=false;
  private errorMessage:string;
  sortOrder = 'asc';  // set the default sort order

  constructor(public patientConditionService: PatientConditionService) { }

  ngOnInit() {
    this.loadPatientId();
  }

  loadPatientId() {    
    const token = this.getToken();
    var patientId = jwt_decode(token);
    this.loadPatientDemographics(patientId);
    this.loadPatientConditions(patientId);
  }

  getToken():string{
    let concatToken1 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.";
    let concatToken2 = ".SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);
    let token = params.get('launch');
    token = concatToken1.concat(token).concat(concatToken2);    
    return token;
  }

  loadPatientConditions(patientId) {
    return this.patientConditionService.getConditions(patientId).then(({entry}) => {
      this.conditionsList = _.filter(entry, function(itr) { 
        return itr.resource.resourceType == 'Condition'; 
     });
    }).catch(error => {
     this.hasError = true;
     this.errorMessage = "* Conditions api failed  to fetch response, Kindly check only one patient is selected and Try again!";
  });
  }

  loadPatientDemographics(patientId) {
    return this.patientConditionService.getPatientDemographics(patientId).then((data) => {
      this.patientDemograpics = data;
    }).catch(error => {
      this.hasError = true;
      this.errorMessage = "* Patient Demographics api failed to fetch response, Kindly check only one patient is selected and Try again!";
   });
  }
}
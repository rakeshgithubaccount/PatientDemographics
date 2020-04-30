import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError,map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PatientConditionService {

  // Base url open 
  //baseurl = 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca';
  baseurl = 'https://launch.smarthealthit.org/v/r2/fhir/Patient/'

  constructor(private http: HttpClient) { }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json+fhir'
    })
  }
  // GET
  getConditions(patientId) {
    const url = this.baseurl + patientId.b+'/$everything?_count=500';
    const promise = new Promise((resolve, reject) => {
      this.http.get(url).toPromise().then((data) => {
        setTimeout(function() {
          resolve(data);
        }, 1500);
      }).catch((error) => {
        reject();
        console.log("Promise rejected with " + JSON.stringify(error));
        this.errorHandl(error);
      });
     
    });
    return promise;
  }

  //Get
  getPatientDemographics(patientId){
    const url = this.baseurl + patientId.b;
    const promise = new Promise((resolve, reject) => {
      this.http.get(url).toPromise().then((data) => {
        setTimeout(function() {
          resolve(data);
        }, 1500);
      }).catch((error) => {
        reject();
        console.log("Promise rejected with " + JSON.stringify(error));
        this.errorHandl(error);
      });
     
    });
    return promise;
  }


  // Error handling
  errorHandl(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     return throwError(errorMessage);
  }

}
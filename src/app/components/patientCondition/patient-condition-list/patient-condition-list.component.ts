import { Component, OnInit,Input } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-patient-condition-list',
  templateUrl: './patient-condition-list.component.html',
  styleUrls: ['./patient-condition-list.component.css']
})
export class PatientConditionListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() conditionsList;  

  sort(sortColoumn, sortOrdr){
    this.conditionsList = _.orderBy(this.conditionsList, 'resource.' + sortColoumn, sortOrdr);
  }  

}

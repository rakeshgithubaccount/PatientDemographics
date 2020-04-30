import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-patient-demo-graphics',
  templateUrl: './patient-demo-graphics.component.html',
  styleUrls: ['./patient-demo-graphics.component.css']
})
export class PatientDemoGraphicsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() patientDemograpics;

}

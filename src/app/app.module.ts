import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Http client module */
import { HttpClientModule } from '@angular/common/http';
import { PatientDemoGraphicsComponent } from './components/patient-demo-graphics/patient-demo-graphics.component';
import { PatientConditionListComponent } from './components/patientCondition/patient-condition-list/patient-condition-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientDemoGraphicsComponent,
    PatientConditionListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
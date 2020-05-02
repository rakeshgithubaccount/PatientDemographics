# Patient Demographics

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.0.

## Prerequisites
Node version - v13.13.0 (can check version on terminal : node --version)
npm version - 6.14.4 (can check version on terminal : npm --version)

## Steps to be executed
Open terminal, cd upto patientDemographic folder, then execute below commands<br/>
1) npm install -g @angular/cli
2) npm install

node_modules folder is expected to be created in your patientDemographic folder after completion of npm install command


## Running Application

Run `npm start` for running application.

Project will be compiled successfully on port 4200

Launch - SMART Health IT sandbox (https://launch.smarthealthit.org/)
1) Change "Launch Type" to "Patient Portal Launch"
2) Change "FHIR Version" to "R2 (DSTU2)"
3) Select "Patient" from the dropdown element (Select only one patient having conditions)
4) Enter "http://localhost:4200" at "App Launch URL" section and launch
5) Local application should be launched, displaying patient demographics with Sortable Conditions

## Notes

Can test any patient, but for better view i have tested "Ms. Irma Blick, age: 22 years, sex: Female" as it has more number of conditions

ScreentShot kept in asset folder

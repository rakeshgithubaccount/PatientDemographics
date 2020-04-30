import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientConditionListComponent } from './patient-condition-list.component';

describe('PatientConditionListComponent', () => {
  let component: PatientConditionListComponent;
  let fixture: ComponentFixture<PatientConditionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientConditionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientConditionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

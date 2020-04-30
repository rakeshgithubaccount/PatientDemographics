import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDemoGraphicsComponent } from './patient-demo-graphics.component';

describe('PatientDemoGraphicsComponent', () => {
  let component: PatientDemoGraphicsComponent;
  let fixture: ComponentFixture<PatientDemoGraphicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientDemoGraphicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientDemoGraphicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

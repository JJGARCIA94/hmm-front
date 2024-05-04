import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestAmbulanceComponent } from './request-ambulance.component';

describe('RequestAmbulanceComponent', () => {
  let component: RequestAmbulanceComponent;
  let fixture: ComponentFixture<RequestAmbulanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestAmbulanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RequestAmbulanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

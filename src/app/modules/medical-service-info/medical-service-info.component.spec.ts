import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalServiceInfoComponent } from './medical-service-info.component';

describe('MedicalServicesInfoComponent', () => {
  let component: MedicalServiceInfoComponent;
  let fixture: ComponentFixture<MedicalServiceInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicalServiceInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedicalServiceInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

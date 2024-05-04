import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalDigitalInfoComponent } from './medical-digital-info.component';

describe('MedicalDigitalInfoComponent', () => {
  let component: MedicalDigitalInfoComponent;
  let fixture: ComponentFixture<MedicalDigitalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicalDigitalInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedicalDigitalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

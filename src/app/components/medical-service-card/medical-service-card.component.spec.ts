import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalServiceCardComponent } from './medical-service-card.component';

describe('MedicalServiceCardComponent', () => {
  let component: MedicalServiceCardComponent;
  let fixture: ComponentFixture<MedicalServiceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicalServiceCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedicalServiceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalAreaComponent } from './medical-area.component';

describe('MedicalAreaComponent', () => {
  let component: MedicalAreaComponent;
  let fixture: ComponentFixture<MedicalAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicalAreaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedicalAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

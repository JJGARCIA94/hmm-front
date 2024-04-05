import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreadmissionComponent } from './preadmission.component';

describe('PreadmissionComponent', () => {
  let component: PreadmissionComponent;
  let fixture: ComponentFixture<PreadmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreadmissionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreadmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

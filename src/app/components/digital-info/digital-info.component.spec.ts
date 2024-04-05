import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalInfoComponent } from './digital-info.component';

describe('DigitalInfoComponent', () => {
  let component: DigitalInfoComponent;
  let fixture: ComponentFixture<DigitalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigitalInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DigitalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

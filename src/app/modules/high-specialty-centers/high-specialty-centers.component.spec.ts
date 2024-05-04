import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighSpecialtyCentersComponent } from './high-specialty-centers.component';

describe('HighSpecialtyCentersComponent', () => {
  let component: HighSpecialtyCentersComponent;
  let fixture: ComponentFixture<HighSpecialtyCentersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighSpecialtyCentersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HighSpecialtyCentersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

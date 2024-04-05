import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsSpecialitiesComponent } from './doctors-specialities.component';

describe('DoctorsSpecialitiesComponent', () => {
  let component: DoctorsSpecialitiesComponent;
  let fixture: ComponentFixture<DoctorsSpecialitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorsSpecialitiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorsSpecialitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

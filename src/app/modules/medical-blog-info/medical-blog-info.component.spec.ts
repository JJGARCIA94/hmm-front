import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalBlogInfoComponent } from './medical-blog-info.component';

describe('MedicalBlogInfoComponent', () => {
  let component: MedicalBlogInfoComponent;
  let fixture: ComponentFixture<MedicalBlogInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicalBlogInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedicalBlogInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

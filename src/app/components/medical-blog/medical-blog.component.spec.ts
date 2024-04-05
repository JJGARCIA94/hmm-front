import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalBlogComponent } from './medical-blog.component';

describe('MedicalBlogComponent', () => {
  let component: MedicalBlogComponent;
  let fixture: ComponentFixture<MedicalBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicalBlogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedicalBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialsBusinessComponent } from './testimonials-business.component';

describe('TestimonialsBusinessComponent', () => {
  let component: TestimonialsBusinessComponent;
  let fixture: ComponentFixture<TestimonialsBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestimonialsBusinessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestimonialsBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

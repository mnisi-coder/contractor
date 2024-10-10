import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionProfileComponent } from './description-profile.component';

describe('DescriptionProfileComponent', () => {
  let component: DescriptionProfileComponent;
  let fixture: ComponentFixture<DescriptionProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DescriptionProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DescriptionProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackToSearchComponent } from './back-to-search.component';

describe('BackToSearchComponent', () => {
  let component: BackToSearchComponent;
  let fixture: ComponentFixture<BackToSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BackToSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BackToSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesProfilesComponent } from './services-profiles.component';

describe('ServicesProfilesComponent', () => {
  let component: ServicesProfilesComponent;
  let fixture: ComponentFixture<ServicesProfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServicesProfilesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicesProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosProfileComponent } from './photos-profile.component';

describe('PhotosProfileComponent', () => {
  let component: PhotosProfileComponent;
  let fixture: ComponentFixture<PhotosProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotosProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhotosProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

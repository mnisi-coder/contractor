import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestemonyComponent } from './testemony.component';

describe('TestemonyComponent', () => {
  let component: TestemonyComponent;
  let fixture: ComponentFixture<TestemonyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestemonyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestemonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

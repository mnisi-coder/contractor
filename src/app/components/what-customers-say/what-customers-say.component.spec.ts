import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatCustomersSayComponent } from './what-customers-say.component';

describe('WhatCustomersSayComponent', () => {
  let component: WhatCustomersSayComponent;
  let fixture: ComponentFixture<WhatCustomersSayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WhatCustomersSayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhatCustomersSayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

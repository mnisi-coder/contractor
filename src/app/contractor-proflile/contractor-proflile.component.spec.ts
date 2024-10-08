import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractorProflileComponent } from './contractor-proflile.component';

describe('ContractorProflileComponent', () => {
  let component: ContractorProflileComponent;
  let fixture: ComponentFixture<ContractorProflileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContractorProflileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContractorProflileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

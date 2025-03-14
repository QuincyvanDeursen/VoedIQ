import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmrCalculatorComponent } from './bmr-calculator.component';

describe('BmrCalculatorComponent', () => {
  let component: BmrCalculatorComponent;
  let fixture: ComponentFixture<BmrCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BmrCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmrCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

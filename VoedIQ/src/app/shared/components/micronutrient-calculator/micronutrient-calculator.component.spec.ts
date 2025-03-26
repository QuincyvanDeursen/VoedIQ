import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicronutrientCalculatorComponent } from './micronutrient-calculator.component';

describe('MicronutrientCalculatorComponent', () => {
  let component: MicronutrientCalculatorComponent;
  let fixture: ComponentFixture<MicronutrientCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MicronutrientCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MicronutrientCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

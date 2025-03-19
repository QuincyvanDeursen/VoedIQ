import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetWeightTimeCalculatorComponent } from './target-weight-time-calculator.component';

describe('TargetWeightTimeCalculatorComponent', () => {
  let component: TargetWeightTimeCalculatorComponent;
  let fixture: ComponentFixture<TargetWeightTimeCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TargetWeightTimeCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TargetWeightTimeCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

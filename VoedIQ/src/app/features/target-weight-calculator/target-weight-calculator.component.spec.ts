import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetWeightCalculatorComponent } from './target-weight-calculator.component';

describe('TargetWeightCalculatorComponent', () => {
  let component: TargetWeightCalculatorComponent;
  let fixture: ComponentFixture<TargetWeightCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TargetWeightCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TargetWeightCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityKcalCalculatorComponent } from './activity-kcal-calculator.component';

describe('ActivityKcalCalculatorComponent', () => {
  let component: ActivityKcalCalculatorComponent;
  let fixture: ComponentFixture<ActivityKcalCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivityKcalCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivityKcalCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityBurnCalculatorComponent } from './activity-burn-calculator.component';

describe('ActivityBurnCalculatorComponent', () => {
  let component: ActivityBurnCalculatorComponent;
  let fixture: ComponentFixture<ActivityBurnCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivityBurnCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivityBurnCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdeeCalculatorComponent } from './tdee-calculator.component';

describe('TdeeCalculatorComponent', () => {
  let component: TdeeCalculatorComponent;
  let fixture: ComponentFixture<TdeeCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TdeeCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TdeeCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

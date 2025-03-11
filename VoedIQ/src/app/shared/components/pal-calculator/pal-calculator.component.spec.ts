import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalCalculatorComponent } from './pal-calculator.component';

describe('PalCalculatorComponent', () => {
  let component: PalCalculatorComponent;
  let fixture: ComponentFixture<PalCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PalCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PalCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

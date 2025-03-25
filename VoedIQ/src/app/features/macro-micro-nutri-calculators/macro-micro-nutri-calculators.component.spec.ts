import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacroMicroNutriCalculatorsComponent } from './macro-micro-nutri-calculators.component';

describe('MacroMicroNutriCalculatorsComponent', () => {
  let component: MacroMicroNutriCalculatorsComponent;
  let fixture: ComponentFixture<MacroMicroNutriCalculatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MacroMicroNutriCalculatorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MacroMicroNutriCalculatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyCalculatorsComponent } from './energy-calculators.component';

describe('EnergyCalculatorsComponent', () => {
  let component: EnergyCalculatorsComponent;
  let fixture: ComponentFixture<EnergyCalculatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnergyCalculatorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnergyCalculatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

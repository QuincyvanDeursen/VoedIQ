import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GezondetenWaterComponent } from './gezondeten-water.component';

describe('GezondetenWaterComponent', () => {
  let component: GezondetenWaterComponent;
  let fixture: ComponentFixture<GezondetenWaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GezondetenWaterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GezondetenWaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentatieCaloriesComponent } from './presentatie-calories.component';

describe('PresentatieCaloriesComponent', () => {
  let component: PresentatieCaloriesComponent;
  let fixture: ComponentFixture<PresentatieCaloriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresentatieCaloriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentatieCaloriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

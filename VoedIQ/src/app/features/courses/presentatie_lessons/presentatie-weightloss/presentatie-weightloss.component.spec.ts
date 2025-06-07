import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentatieWeightlossComponent } from './presentatie-weightloss.component';

describe('PresentatieWeightlossComponent', () => {
  let component: PresentatieWeightlossComponent;
  let fixture: ComponentFixture<PresentatieWeightlossComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresentatieWeightlossComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentatieWeightlossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

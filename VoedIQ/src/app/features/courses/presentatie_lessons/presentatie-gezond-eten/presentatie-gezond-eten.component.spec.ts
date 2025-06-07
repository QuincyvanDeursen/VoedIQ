import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentatieGezondEtenComponent } from './presentatie-gezond-eten.component';

describe('PresentatieGezondEtenComponent', () => {
  let component: PresentatieGezondEtenComponent;
  let fixture: ComponentFixture<PresentatieGezondEtenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresentatieGezondEtenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentatieGezondEtenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

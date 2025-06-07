import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentatieIntroductieComponent } from './presentatie-introductie.component';

describe('PresentatieIntroductieComponent', () => {
  let component: PresentatieIntroductieComponent;
  let fixture: ComponentFixture<PresentatieIntroductieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresentatieIntroductieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentatieIntroductieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

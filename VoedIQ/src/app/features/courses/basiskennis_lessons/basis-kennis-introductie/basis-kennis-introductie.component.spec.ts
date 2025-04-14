import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasisKennisIntroductieComponent } from './basis-kennis-introductie.component';

describe('BasisKennisIntroductieComponent', () => {
  let component: BasisKennisIntroductieComponent;
  let fixture: ComponentFixture<BasisKennisIntroductieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasisKennisIntroductieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasisKennisIntroductieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

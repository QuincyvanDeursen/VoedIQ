import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfvallenIntroductieComponent } from './afvallen-introductie.component';

describe('AfvallenIntroductieComponent', () => {
  let component: AfvallenIntroductieComponent;
  let fixture: ComponentFixture<AfvallenIntroductieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AfvallenIntroductieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfvallenIntroductieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

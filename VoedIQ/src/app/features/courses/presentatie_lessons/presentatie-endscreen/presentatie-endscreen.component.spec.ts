import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentatieEndscreenComponent } from './presentatie-endscreen.component';

describe('PresentatieEndscreenComponent', () => {
  let component: PresentatieEndscreenComponent;
  let fixture: ComponentFixture<PresentatieEndscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresentatieEndscreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentatieEndscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

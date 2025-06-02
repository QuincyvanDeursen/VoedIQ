import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GezondetenEndscreenComponent } from './gezondeten-endscreen.component';

describe('GezondetenEndscreenComponent', () => {
  let component: GezondetenEndscreenComponent;
  let fixture: ComponentFixture<GezondetenEndscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GezondetenEndscreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GezondetenEndscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

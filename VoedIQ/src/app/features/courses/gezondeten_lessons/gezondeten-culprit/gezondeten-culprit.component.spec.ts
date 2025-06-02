import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GezondetenCulpritComponent } from './gezondeten-culprit.component';

describe('GezondetenCulpritComponent', () => {
  let component: GezondetenCulpritComponent;
  let fixture: ComponentFixture<GezondetenCulpritComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GezondetenCulpritComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GezondetenCulpritComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

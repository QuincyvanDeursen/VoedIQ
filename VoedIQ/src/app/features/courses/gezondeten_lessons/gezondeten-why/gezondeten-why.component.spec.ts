import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GezondetenWhyComponent } from './gezondeten-why.component';

describe('GezondetenWhyComponent', () => {
  let component: GezondetenWhyComponent;
  let fixture: ComponentFixture<GezondetenWhyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GezondetenWhyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GezondetenWhyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GezondetenTdeeComponent } from './gezondeten-tdee.component';

describe('GezondetenTdeeComponent', () => {
  let component: GezondetenTdeeComponent;
  let fixture: ComponentFixture<GezondetenTdeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GezondetenTdeeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GezondetenTdeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

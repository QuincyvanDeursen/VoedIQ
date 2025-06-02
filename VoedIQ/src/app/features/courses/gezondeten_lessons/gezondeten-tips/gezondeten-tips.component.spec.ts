import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GezondetenTipsComponent } from './gezondeten-tips.component';

describe('GezondetenTipsComponent', () => {
  let component: GezondetenTipsComponent;
  let fixture: ComponentFixture<GezondetenTipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GezondetenTipsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GezondetenTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

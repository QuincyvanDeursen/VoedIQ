import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GezondetenWhatComponent } from './gezondeten-what.component';

describe('GezondetenWhatComponent', () => {
  let component: GezondetenWhatComponent;
  let fixture: ComponentFixture<GezondetenWhatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GezondetenWhatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GezondetenWhatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

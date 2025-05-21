import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfvallenEndScreenComponent } from './afvallen-end-screen.component';

describe('AfvallenEndScreenComponent', () => {
  let component: AfvallenEndScreenComponent;
  let fixture: ComponentFixture<AfvallenEndScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AfvallenEndScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfvallenEndScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

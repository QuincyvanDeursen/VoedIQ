import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentatieTdeeComponent } from './presentatie-tdee.component';

describe('PresentatieTdeeComponent', () => {
  let component: PresentatieTdeeComponent;
  let fixture: ComponentFixture<PresentatieTdeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresentatieTdeeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentatieTdeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

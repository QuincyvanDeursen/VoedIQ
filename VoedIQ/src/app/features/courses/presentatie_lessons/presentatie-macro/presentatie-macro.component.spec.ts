import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentatieMacroComponent } from './presentatie-macro.component';

describe('PresentatieMacroComponent', () => {
  let component: PresentatieMacroComponent;
  let fixture: ComponentFixture<PresentatieMacroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresentatieMacroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentatieMacroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasiskennisModule2Lesson1Component } from './basiskennis-module2-lesson1.component';

describe('BasiskennisModule2Lesson1Component', () => {
  let component: BasiskennisModule2Lesson1Component;
  let fixture: ComponentFixture<BasiskennisModule2Lesson1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasiskennisModule2Lesson1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasiskennisModule2Lesson1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

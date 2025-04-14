import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasiskennisModule3Lesson1Component } from './basiskennis-module3-lesson1.component';

describe('BasiskennisModule3Lesson1Component', () => {
  let component: BasiskennisModule3Lesson1Component;
  let fixture: ComponentFixture<BasiskennisModule3Lesson1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasiskennisModule3Lesson1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasiskennisModule3Lesson1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

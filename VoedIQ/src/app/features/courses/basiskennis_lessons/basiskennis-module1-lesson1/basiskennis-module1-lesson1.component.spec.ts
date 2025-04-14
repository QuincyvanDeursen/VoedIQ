import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasiskennisModule1Lesson1Component } from './basiskennis-module1-lesson1.component';

describe('BasiskennisModule1Lesson1Component', () => {
  let component: BasiskennisModule1Lesson1Component;
  let fixture: ComponentFixture<BasiskennisModule1Lesson1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasiskennisModule1Lesson1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasiskennisModule1Lesson1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

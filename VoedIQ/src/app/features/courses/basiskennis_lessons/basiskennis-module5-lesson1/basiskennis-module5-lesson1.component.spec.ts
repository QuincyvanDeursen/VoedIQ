import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasiskennisModule5Lesson1Component } from './basiskennis-module5-lesson1.component';

describe('BasiskennisModule5Lesson1Component', () => {
  let component: BasiskennisModule5Lesson1Component;
  let fixture: ComponentFixture<BasiskennisModule5Lesson1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasiskennisModule5Lesson1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasiskennisModule5Lesson1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

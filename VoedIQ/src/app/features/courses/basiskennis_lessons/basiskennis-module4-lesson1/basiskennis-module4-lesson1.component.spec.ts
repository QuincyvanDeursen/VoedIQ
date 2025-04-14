import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasiskennisModule4Lesson1Component } from './basiskennis-module4-lesson1.component';

describe('BasiskennisModule4Lesson1Component', () => {
  let component: BasiskennisModule4Lesson1Component;
  let fixture: ComponentFixture<BasiskennisModule4Lesson1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasiskennisModule4Lesson1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasiskennisModule4Lesson1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

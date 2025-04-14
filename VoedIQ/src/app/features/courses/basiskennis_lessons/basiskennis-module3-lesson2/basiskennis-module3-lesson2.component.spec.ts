import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasiskennisModule3Lesson2Component } from './basiskennis-module3-lesson2.component';

describe('BasiskennisModule3Lesson2Component', () => {
  let component: BasiskennisModule3Lesson2Component;
  let fixture: ComponentFixture<BasiskennisModule3Lesson2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasiskennisModule3Lesson2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasiskennisModule3Lesson2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

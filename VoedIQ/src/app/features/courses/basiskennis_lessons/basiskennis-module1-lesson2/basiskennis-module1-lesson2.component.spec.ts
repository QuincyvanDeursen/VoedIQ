import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasiskennisModule1Lesson2Component } from './basiskennis-module1-lesson2.component';

describe('BasiskennisModule1Lesson2Component', () => {
  let component: BasiskennisModule1Lesson2Component;
  let fixture: ComponentFixture<BasiskennisModule1Lesson2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasiskennisModule1Lesson2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasiskennisModule1Lesson2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

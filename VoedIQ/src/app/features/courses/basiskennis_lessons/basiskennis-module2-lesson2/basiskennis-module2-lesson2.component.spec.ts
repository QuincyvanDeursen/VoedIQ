import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasiskennisModule2Lesson2Component } from './basiskennis-module2-lesson2.component';

describe('BasiskennisModule2Lesson2Component', () => {
  let component: BasiskennisModule2Lesson2Component;
  let fixture: ComponentFixture<BasiskennisModule2Lesson2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasiskennisModule2Lesson2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasiskennisModule2Lesson2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

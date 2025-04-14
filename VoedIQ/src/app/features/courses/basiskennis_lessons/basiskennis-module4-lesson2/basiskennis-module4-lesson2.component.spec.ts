import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasiskennisModule4Lesson2Component } from './basiskennis-module4-lesson2.component';

describe('BasiskennisModule4Lesson2Component', () => {
  let component: BasiskennisModule4Lesson2Component;
  let fixture: ComponentFixture<BasiskennisModule4Lesson2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasiskennisModule4Lesson2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasiskennisModule4Lesson2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

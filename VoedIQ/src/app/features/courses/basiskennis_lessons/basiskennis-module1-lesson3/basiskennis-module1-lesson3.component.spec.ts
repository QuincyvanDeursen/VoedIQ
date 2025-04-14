import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasiskennisModule1Lesson3Component } from './basiskennis-module1-lesson3.component';

describe('BasiskennisModule1Lesson3Component', () => {
  let component: BasiskennisModule1Lesson3Component;
  let fixture: ComponentFixture<BasiskennisModule1Lesson3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasiskennisModule1Lesson3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasiskennisModule1Lesson3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

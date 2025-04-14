import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasiskennisModule2Lesson3Component } from './basiskennis-module2-lesson3.component';

describe('BasiskennisModule2Lesson3Component', () => {
  let component: BasiskennisModule2Lesson3Component;
  let fixture: ComponentFixture<BasiskennisModule2Lesson3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasiskennisModule2Lesson3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasiskennisModule2Lesson3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasiskennisModule3Lesson3Component } from './basiskennis-module3-lesson3.component';

describe('BasiskennisModule3Lesson3Component', () => {
  let component: BasiskennisModule3Lesson3Component;
  let fixture: ComponentFixture<BasiskennisModule3Lesson3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasiskennisModule3Lesson3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasiskennisModule3Lesson3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasiskennisModule4Lesson3Component } from './basiskennis-module4-lesson3.component';

describe('BasiskennisModule4Lesson3Component', () => {
  let component: BasiskennisModule4Lesson3Component;
  let fixture: ComponentFixture<BasiskennisModule4Lesson3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasiskennisModule4Lesson3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasiskennisModule4Lesson3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfvallenModule1Lesson1Component } from './afvallen-module1-lesson1.component';

describe('AfvallenModule1Lesson1Component', () => {
  let component: AfvallenModule1Lesson1Component;
  let fixture: ComponentFixture<AfvallenModule1Lesson1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AfvallenModule1Lesson1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfvallenModule1Lesson1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

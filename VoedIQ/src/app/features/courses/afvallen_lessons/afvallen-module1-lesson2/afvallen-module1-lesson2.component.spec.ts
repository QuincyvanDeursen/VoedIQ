import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfvallenModule1Lesson2Component } from './afvallen-module1-lesson2.component';

describe('AfvallenModule1Lesson2Component', () => {
  let component: AfvallenModule1Lesson2Component;
  let fixture: ComponentFixture<AfvallenModule1Lesson2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AfvallenModule1Lesson2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfvallenModule1Lesson2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

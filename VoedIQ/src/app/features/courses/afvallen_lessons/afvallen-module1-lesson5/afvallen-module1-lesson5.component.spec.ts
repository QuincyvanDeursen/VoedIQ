import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfvallenModule1Lesson5Component } from './afvallen-module1-lesson5.component';

describe('AfvallenModule1Lesson5Component', () => {
  let component: AfvallenModule1Lesson5Component;
  let fixture: ComponentFixture<AfvallenModule1Lesson5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AfvallenModule1Lesson5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfvallenModule1Lesson5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

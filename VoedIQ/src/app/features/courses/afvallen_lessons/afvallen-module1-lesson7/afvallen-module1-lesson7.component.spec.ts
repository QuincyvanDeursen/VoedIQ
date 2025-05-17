import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfvallenModule1Lesson7Component } from './afvallen-module1-lesson7.component';

describe('AfvallenModule1Lesson7Component', () => {
  let component: AfvallenModule1Lesson7Component;
  let fixture: ComponentFixture<AfvallenModule1Lesson7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AfvallenModule1Lesson7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfvallenModule1Lesson7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

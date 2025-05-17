import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfvallenModule1Lesson6Component } from './afvallen-module1-lesson6.component';

describe('AfvallenModule1Lesson6Component', () => {
  let component: AfvallenModule1Lesson6Component;
  let fixture: ComponentFixture<AfvallenModule1Lesson6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AfvallenModule1Lesson6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfvallenModule1Lesson6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

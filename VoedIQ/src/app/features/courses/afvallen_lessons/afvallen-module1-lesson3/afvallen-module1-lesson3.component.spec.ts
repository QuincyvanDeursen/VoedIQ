import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfvallenModule1Lesson3Component } from './afvallen-module1-lesson3.component';

describe('AfvallenModule1Lesson3Component', () => {
  let component: AfvallenModule1Lesson3Component;
  let fixture: ComponentFixture<AfvallenModule1Lesson3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AfvallenModule1Lesson3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfvallenModule1Lesson3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

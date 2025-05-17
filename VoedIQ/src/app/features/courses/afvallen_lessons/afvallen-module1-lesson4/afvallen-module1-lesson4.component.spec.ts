import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfvallenModule1Lesson4Component } from './afvallen-module1-lesson4.component';

describe('AfvallenModule1Lesson4Component', () => {
  let component: AfvallenModule1Lesson4Component;
  let fixture: ComponentFixture<AfvallenModule1Lesson4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AfvallenModule1Lesson4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfvallenModule1Lesson4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

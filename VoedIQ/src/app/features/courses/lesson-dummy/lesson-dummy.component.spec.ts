import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonDummyComponent } from './lesson-dummy.component';

describe('LessonDummyComponent', () => {
  let component: LessonDummyComponent;
  let fixture: ComponentFixture<LessonDummyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LessonDummyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessonDummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

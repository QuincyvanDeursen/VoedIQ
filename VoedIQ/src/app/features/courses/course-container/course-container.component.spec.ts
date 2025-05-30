import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseContainerComponent } from './course-container.component';

describe('CourseContainerComponent', () => {
  let component: CourseContainerComponent;
  let fixture: ComponentFixture<CourseContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

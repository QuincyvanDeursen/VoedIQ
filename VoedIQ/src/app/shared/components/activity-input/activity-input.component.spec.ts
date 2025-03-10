import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityInputComponent } from './activity-input.component';

describe('ActivityInputComponent', () => {
  let component: ActivityInputComponent;
  let fixture: ComponentFixture<ActivityInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivityInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivityInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

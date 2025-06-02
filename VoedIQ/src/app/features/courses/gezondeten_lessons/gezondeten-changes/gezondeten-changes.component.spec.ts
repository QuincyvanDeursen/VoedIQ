import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GezondetenChangesComponent } from './gezondeten-changes.component';

describe('GezondetenChangesComponent', () => {
  let component: GezondetenChangesComponent;
  let fixture: ComponentFixture<GezondetenChangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GezondetenChangesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GezondetenChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

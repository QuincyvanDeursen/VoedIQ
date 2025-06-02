import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GezondetenAnalyseComponent } from './gezondeten-analyse.component';

describe('GezondetenAnalyseComponent', () => {
  let component: GezondetenAnalyseComponent;
  let fixture: ComponentFixture<GezondetenAnalyseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GezondetenAnalyseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GezondetenAnalyseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

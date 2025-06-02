import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GezondetenDefinitionComponent } from './gezondeten-definition.component';

describe('GezondetenDefinitionComponent', () => {
  let component: GezondetenDefinitionComponent;
  let fixture: ComponentFixture<GezondetenDefinitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GezondetenDefinitionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GezondetenDefinitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

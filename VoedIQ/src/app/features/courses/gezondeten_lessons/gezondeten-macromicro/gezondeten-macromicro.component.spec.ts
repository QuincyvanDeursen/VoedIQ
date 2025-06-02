import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GezondetenMacromicroComponent } from './gezondeten-macromicro.component';

describe('GezondetenMacromicroComponent', () => {
  let component: GezondetenMacromicroComponent;
  let fixture: ComponentFixture<GezondetenMacromicroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GezondetenMacromicroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GezondetenMacromicroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasementRemodelingComponent } from './basement-remodeling.component';

describe('BasementRemodelingComponent', () => {
  let component: BasementRemodelingComponent;
  let fixture: ComponentFixture<BasementRemodelingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasementRemodelingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasementRemodelingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

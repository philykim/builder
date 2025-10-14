import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BathroomRemodelingComponent } from './bathroom-remodeling.component';

describe('BathroomRemodelingComponent', () => {
  let component: BathroomRemodelingComponent;
  let fixture: ComponentFixture<BathroomRemodelingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BathroomRemodelingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BathroomRemodelingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

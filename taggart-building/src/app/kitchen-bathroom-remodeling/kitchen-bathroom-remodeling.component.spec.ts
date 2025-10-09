import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenBathroomRemodelingComponent } from './kitchen-bathroom-remodeling.component';

describe('KitchenBathroomRemodelingComponent', () => {
  let component: KitchenBathroomRemodelingComponent;
  let fixture: ComponentFixture<KitchenBathroomRemodelingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KitchenBathroomRemodelingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KitchenBathroomRemodelingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

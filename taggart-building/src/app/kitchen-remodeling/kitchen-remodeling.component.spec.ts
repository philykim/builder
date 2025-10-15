import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenRemodelingComponent } from './kitchen-remodeling.component';

describe('KitchenRemodelingComponent', () => {
  let component: KitchenRemodelingComponent;
  let fixture: ComponentFixture<KitchenRemodelingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KitchenRemodelingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KitchenRemodelingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

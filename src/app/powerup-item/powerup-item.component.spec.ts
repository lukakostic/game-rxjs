import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerupItemComponent } from './powerup-item.component';

describe('PowerupItemComponent', () => {
  let component: PowerupItemComponent;
  let fixture: ComponentFixture<PowerupItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PowerupItemComponent]
    });
    fixture = TestBed.createComponent(PowerupItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerupComponent } from './powerup.component';

describe('PowerupComponent', () => {
  let component: PowerupComponent;
  let fixture: ComponentFixture<PowerupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PowerupComponent]
    });
    fixture = TestBed.createComponent(PowerupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthbarComponent } from './healthbar.component';

describe('HealthbarComponent', () => {
  let component: HealthbarComponent;
  let fixture: ComponentFixture<HealthbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HealthbarComponent]
    });
    fixture = TestBed.createComponent(HealthbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

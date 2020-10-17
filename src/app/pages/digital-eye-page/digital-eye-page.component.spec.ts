import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalEyePageComponent } from './digital-eye-page.component';

describe('DigitalEyePageComponent', () => {
  let component: DigitalEyePageComponent;
  let fixture: ComponentFixture<DigitalEyePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalEyePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalEyePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

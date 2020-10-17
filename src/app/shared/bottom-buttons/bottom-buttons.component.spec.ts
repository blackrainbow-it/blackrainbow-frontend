import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomButtonsComponent } from './bottom-buttons.component';

describe('BottomButtonsComponent', () => {
  let component: BottomButtonsComponent;
  let fixture: ComponentFixture<BottomButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

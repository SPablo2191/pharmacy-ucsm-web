import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiInputButtonComponent } from './ui-input-button.component';

describe('UiInputButtonComponent', () => {
  let component: UiInputButtonComponent;
  let fixture: ComponentFixture<UiInputButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ UiInputButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiInputButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

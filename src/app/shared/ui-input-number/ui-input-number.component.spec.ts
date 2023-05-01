import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiInputNumberComponent } from './ui-input-number.component';

describe('UiInputNumberComponent', () => {
  let component: UiInputNumberComponent;
  let fixture: ComponentFixture<UiInputNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ UiInputNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiInputNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

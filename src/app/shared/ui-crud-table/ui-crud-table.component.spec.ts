import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiCrudTableComponent } from './ui-crud-table.component';

describe('UiCrudTableComponent', () => {
  let component: UiCrudTableComponent;
  let fixture: ComponentFixture<UiCrudTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ UiCrudTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiCrudTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

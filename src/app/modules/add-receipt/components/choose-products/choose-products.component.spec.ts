import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseProductsComponent } from './choose-products.component';

describe('ChooseProductsComponent', () => {
  let component: ChooseProductsComponent;
  let fixture: ComponentFixture<ChooseProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ChooseProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

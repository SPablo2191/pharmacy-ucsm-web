import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDetailReceiptComponent } from './add-detail-receipt.component';

describe('AddDetailReceiptComponent', () => {
  let component: AddDetailReceiptComponent;
  let fixture: ComponentFixture<AddDetailReceiptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AddDetailReceiptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDetailReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

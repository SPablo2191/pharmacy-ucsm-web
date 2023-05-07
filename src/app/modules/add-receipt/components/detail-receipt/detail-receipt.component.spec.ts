import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailReceiptComponent } from './detail-receipt.component';

describe('DetailReceiptComponent', () => {
  let component: DetailReceiptComponent;
  let fixture: ComponentFixture<DetailReceiptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DetailReceiptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

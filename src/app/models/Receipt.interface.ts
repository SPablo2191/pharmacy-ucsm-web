import { BaseModel } from './BaseModel.interface';
import { Customer } from './Customer.interface';
import { Product } from './Product.interface';

export interface Receipt extends BaseModel {
  number: string;
  total: number;
  customer_id: number;
  branch_id: number;
  details : ReceiptDetail[];
  customerName : string;
  customer : Customer;
}
export interface ReceiptDetail extends BaseModel {
  unitPrice: number;
  quantity: number;
  subTotal: number;
  receipt_id: number;
  product_id: number;
  product : Product;
}

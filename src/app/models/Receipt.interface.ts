import { BaseModel } from './BaseModel.interface';

export interface Receipt extends BaseModel {
  number: string;
  total: number;
  customer_id: number;
  branch_id: number;
}
export interface ReceiptDetail extends BaseModel {
  unitPrice: number;
  quantity: number;
  subTotal: number;
  receipt_id: number;
  product_id: number;
}

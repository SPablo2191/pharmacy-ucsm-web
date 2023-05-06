import { BaseModel } from './BaseModel.interface';

export interface Receipt extends BaseModel {
  number: string;
  total: number;
  customer_id: number;
  branch_id: number;
}

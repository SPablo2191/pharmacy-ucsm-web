import { BaseModel } from "./BaseModel.interface";
import { Product } from "./Product.interface";

export interface Stock extends BaseModel
{
  quantity : number;
  depot_id : number;
  product_id : number;
  product : Product;
}

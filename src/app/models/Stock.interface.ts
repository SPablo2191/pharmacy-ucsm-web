import { BaseModel } from "./BaseModel.interface";

export interface Stock extends BaseModel
{
  quantity : number;
  depot_id : number;
  product_id : number;
}

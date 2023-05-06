import { BaseModel } from "./BaseModel.interface";

export interface Product extends BaseModel
{
  name : string;
  description : string;
  price : number;
  quantitySelected : string;
}

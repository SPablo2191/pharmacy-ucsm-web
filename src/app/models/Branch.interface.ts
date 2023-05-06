import { BaseModel } from "./BaseModel.interface";

export interface Branch extends BaseModel
{
  name : string;
  address : string;
}

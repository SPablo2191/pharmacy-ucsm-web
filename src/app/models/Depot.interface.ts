import { BaseModel } from "./BaseModel.interface";

export interface Depot extends BaseModel
{
  name : string;
  description : string;
  branch_id : number;
}

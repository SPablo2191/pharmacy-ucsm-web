import { BaseModel } from "./BaseModel.interface";

export interface Customer extends BaseModel{
  name : string;
  lastName : string;
  phoneNumber : string;
  email: string;
  DNI : string;
  address : string;
}

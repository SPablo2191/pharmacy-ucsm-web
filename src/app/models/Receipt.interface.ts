import { Client } from "./Client.interface";
import { Employee } from "./Employee.interface";

export interface Receipt{
  id : number;
  client : Client;
  employee : Employee;
  number : string;
  subTotal : number;
  registerDate : Date;
  status : boolean;
}

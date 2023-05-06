export interface Receipt{
  id : number;
  number : string;
  total : number;
  customer_id : number;
  branch_id : number;
  status : boolean;
  registerDate : Date;
}

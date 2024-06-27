export interface SalesResponse {
  id?: number;
  datetime?: Date;
  hour?: Date;
  client?: string;
  seller?: string;
  sale_desc?: string;
  product_id?: number;
  amount?: number;
}

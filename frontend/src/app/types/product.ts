export interface ProductRequest {
  description: string;
  price: number;
  amount: number;
  category_id: number;
  image: string;
}

export interface ProductResponse {
  id: number;
  description: string;
  price: number;
  amount: number;
  category_id: number;
  image: string;
}

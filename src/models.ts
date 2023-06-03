export interface Product {
  _id: string;
  name: string;
  description: string;
  imgUrl: string;
  createdAt: string;
  price: Number;
}
export interface AuthRes {
  token: string;
}
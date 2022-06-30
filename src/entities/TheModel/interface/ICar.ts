export interface ICar {
  brend: string;
  model: string;
  price: number | [number, number];
  colors: string[];
  images: string;
  type: 'premium' | 'economy';
}

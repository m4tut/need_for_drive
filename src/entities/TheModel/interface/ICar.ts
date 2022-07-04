export interface ICar {
  brend: string;
  model: string;
  price: number | [number, number];
  carInfo: {
    color: string;
    carNumber: string;
  }[];
  images: string;
  type: 'premium' | 'economy';
}

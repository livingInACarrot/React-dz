export interface IProduct {
  id: number;
  name: string;
  description?: string;
  category?: string;
  quantity: number;
  unit: string;
  image?: string;
}

export interface IFilter {
  title: string,
  onStock: boolean,
  category: string
}

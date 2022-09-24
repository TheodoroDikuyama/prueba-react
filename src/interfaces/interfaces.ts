export interface ProductosI {
  id?: number;
  title: string;
  price?: number;
  image: string;
  category?: string;
  description?: string;
}

export interface CartProducts {
  id: number;
  title: string;
  image: string;
  price?: number;
  quantity: number | string | undefined;
}

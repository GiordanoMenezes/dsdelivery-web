type productId = {
  id: number;
}

export type OrderDTO = {
  address: string;
  latitude: number;
  longitude: number;
  products: productId[];
}

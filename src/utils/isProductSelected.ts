import { Product } from '../models/Product';

export function isProductSelected(products: Product[], product: Product) {
  return products.some((p) => p.id === product.id);
}

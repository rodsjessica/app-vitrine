import productsData from '../data/products.json';

import type { Product } from '../types/Product';

export async function getProducts(): Promise<Product[]> {
  return productsData;
}
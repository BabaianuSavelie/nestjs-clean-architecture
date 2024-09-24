import { Product } from 'src/domain/entities/product.entity';

export const PRODUCT_REPOSITORY_TOKEN = 'product-repository-token';

export interface IProductRepository {
  findOne(id: string): Promise<Product>;
  create(name: string, price: number): Promise<Product>;
}

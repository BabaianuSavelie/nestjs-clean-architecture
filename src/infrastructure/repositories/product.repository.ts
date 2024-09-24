import { InjectRepository } from '@nestjs/typeorm';
import { IProductRepository } from 'src/application/abstractions/repositories/product-repository.interface';
import { Product } from 'src/domain';
import { Repository } from 'typeorm';

export class ProductRepository implements IProductRepository {
  constructor(
    @InjectRepository(Product) private readonly repository: Repository<Product>,
  ) {}

  findOne(id: string): Promise<Product> {
    return this.repository.findOneBy({ id });
  }
  create(name: string, price: number): Promise<Product> {
    return this.repository.save({
      name,
      price,
    });
  }
}

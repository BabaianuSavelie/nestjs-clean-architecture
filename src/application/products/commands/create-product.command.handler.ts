import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import {
  IProductRepository,
  PRODUCT_REPOSITORY_TOKEN,
} from 'src/application/abstractions/repositories/product-repository.interface';
import { CreateProductCommand } from './create-product.command';
import { Product } from 'src/domain';

@CommandHandler(CreateProductCommand)
export class CreateProductCommandHandler
  implements ICommandHandler<CreateProductCommand, Product>
{
  constructor(
    @Inject(PRODUCT_REPOSITORY_TOKEN)
    private readonly productsRepository: IProductRepository,
  ) {}

  execute(command: CreateProductCommand): Promise<Product> {
    const { name, price } = command;

    return this.productsRepository.create(name, price);
  }
}

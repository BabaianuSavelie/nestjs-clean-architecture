import { Controller, Get, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateProductCommand } from 'src/application/products/commands/create-product.command';
import { Product } from 'src/domain';

@Controller('products')
export class ProductsController {
  constructor(private readonly commandBus: CommandBus) {}

  @Get()
  find(): string {
    return 'I work fine';
  }

  @Post()
  create(): Promise<Product> {
    return this.commandBus.execute(
      new CreateProductCommand('first product', 79),
    );
  }
}

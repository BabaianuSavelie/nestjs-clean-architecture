import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateProductCommand } from './products/commands/create-product.command';
import { CreateProductCommandHandler } from './products/commands/create-product.command.handler';
import { InfrastructureModule } from 'src/infrastructure/infrastructure.module';

@Module({
  imports: [CqrsModule, InfrastructureModule],
  providers: [CreateProductCommand, CreateProductCommandHandler],
  exports: [CreateProductCommandHandler, CreateProductCommand],
})
export class ApplicationModule {}

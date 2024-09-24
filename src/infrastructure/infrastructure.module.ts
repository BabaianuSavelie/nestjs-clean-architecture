import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { PRODUCT_REPOSITORY_TOKEN } from 'src/application/abstractions/repositories/product-repository.interface';
import { ProductRepository } from './repositories/product.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/domain';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([Product])],
  providers: [
    {
      provide: PRODUCT_REPOSITORY_TOKEN,
      useClass: ProductRepository,
    },
  ],
  exports: [
    {
      provide: PRODUCT_REPOSITORY_TOKEN,
      useClass: ProductRepository,
    },
  ],
})
export class InfrastructureModule {}

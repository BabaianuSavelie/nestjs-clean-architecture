import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/domain';

export default TypeOrmModule.forRoot({
  ssl: false,
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'developer',
  database: 'clean',
  entities: [Product],
  synchronize: true,
  logging: true,
});

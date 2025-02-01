import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { Product } from './product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Product])], // Ensure this line is present
  providers: [ProductService],
  controllers: [ProductController],
  exports: [ProductService], // Export service if used in other modules
})
export class ProductModule {}

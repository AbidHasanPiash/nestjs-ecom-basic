import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './customer.entity';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Customer])], // Ensure this line is present
  providers: [CustomerService],
  controllers: [CustomerController],
  exports: [CustomerService], // Export service if used in other modules
})
export class CustomerModule {}

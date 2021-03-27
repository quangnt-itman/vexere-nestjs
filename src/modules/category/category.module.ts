import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import { Category, CategorySchema } from './category.schema';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
// IoC Container
// Inversion Of COntrol
@Module({
  imports: [
    MongooseModule.forFeature([{
      name: Category.name,
      schema: CategorySchema
    }])
  ],
  providers: [CategoryService], // cho class co @Injectable()
  controllers: [CategoryController]
})
export class CategoryModule { }
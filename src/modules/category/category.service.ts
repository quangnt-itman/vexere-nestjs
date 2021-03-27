import { Model } from "mongoose";
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Category, CategoryDocument, CategorySchema } from './category.schema';
import { CreateCategoryDTO, UpdateCategoryDTO } from './category.dto';
import { ObjectID } from "mongodb"

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name)
    private categoryModel: Model<CategoryDocument>
  ) { }

  async getCategories(): Promise<Category[]> {
    return await this.categoryModel.find()
  }

  async createCategory(data: CreateCategoryDTO): Promise<Category> {
    return await this.categoryModel.create(data)
  }

  async getCategoryById(id: ObjectID): Promise<Category> {
    const foundCategory = await this.categoryModel.findById(id);
    if (!foundCategory) throw new NotFoundException("Category not found")

    return foundCategory;
  }

  async updateCategoryById(id: ObjectID, data: UpdateCategoryDTO): Promise<Category> {
    const foundCategory = await this.categoryModel.findById(id);
    if (!foundCategory) throw new NotFoundException("Category not found")

    foundCategory.name = data.name
    return await foundCategory.save()
  }
}
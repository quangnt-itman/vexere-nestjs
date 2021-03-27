import { Controller, Get, Post, Body, Param, Query, Put, Patch } from "@nestjs/common";
import { CategoryService } from './category.service';
import { CreateCategoryDTO, UpdateCategoryDTO } from './category.dto';

@Controller("/categories")
export class CategoryController {
  constructor(
    private categoryService: CategoryService
  ) { }

  @Get()
  getCategories() {
    return this.categoryService.getCategories();
  }

  @Post()
  createCategory(
    @Body() data: CreateCategoryDTO
  ) {
    return this.categoryService.createCategory(data);
  }

  @Get("/:abcid/examples")
  examples(
    @Param() param,
    @Param("abcid") id,
    @Query() query
  ) {
    console.log(param)
    console.log(id)
    console.log(query)
    return {
      message: "This is an example"
    }
  }

  @Get("/:id")
  getCategoryById(
    @Param("id") id
  ) {
    return this.categoryService.getCategoryById(id)
  }

  @Patch("/:id")
  updateCategoryById(
    @Param("id") id,
    @Body() data: UpdateCategoryDTO
  ) {
    return this.categoryService.updateCategoryById(id, data)
  }
}
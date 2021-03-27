import { IsNotEmpty } from "class-validator"

export class CreateCategoryDTO {
  @IsNotEmpty()
  name: string;

  // slug se dc auto tao tu name
  slug: string;
}

export class UpdateCategoryDTO {
  @IsNotEmpty()
  name: string;

  // slug se dc auto tao tu name
  slug: string;
}
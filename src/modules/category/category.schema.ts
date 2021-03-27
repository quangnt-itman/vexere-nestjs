import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose"
import { cleanAccents } from "../../utils/handle-string";
import * as _ from "lodash";

export type CategoryDocument = Category & Document;

@Schema({
  timestamps: true
}) // class decorator
export class Category {
  @Prop()
  name: string;

  @Prop()
  slug: string;
}

const CategorySchema = SchemaFactory.createForClass(Category)

CategorySchema.pre("save", function () {
  // cach thuong dan
  // const slug = cleanAccents(cate.name)
  //   .toLowerCase()
  //   .split(" ")
  //   .join("-")

  // cach lodash
  const slug = _.chain(this)
    .get("name")
    .thru(name => cleanAccents(name))
    .toLower() // _.toLower("May tinh de ban")
    .split(" ")
    .concat(Date.now())
    .join("-")
    .value()
  _.set(this, "slug", slug); // this.slug = slug
})

export { CategorySchema };
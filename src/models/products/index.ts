import { model, Schema, SchemaTypes } from "mongoose";
import { IProductDocument, ProdctCategories } from "./index.types";

export const ProductSchema = new Schema<IProductDocument>(
  {
    name:{
      type: SchemaTypes.String, 
      required: true,
    },
    description:{
      type: SchemaTypes.String,
      required: true,
    },
    code: {
      type: SchemaTypes.String,
      required: true,
      unique: true,
    },
    brand:{
      type: SchemaTypes.String,
      required: true,
    },
    category:{
      type: SchemaTypes.String,
      enum: ProdctCategories,
      required: true,
    },
    images:{
      type: [SchemaTypes.String],
      required: true,
    },
    price:{
      type: SchemaTypes.Number,
      required: true,
    },
    previewImage:{
      type: SchemaTypes.String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);


export const ProductModel = model<IProductDocument>("Product", ProductSchema);
import type { Document, Types } from "mongoose";

export const ProdctCategories = ["NewArrivals", "Cloths", "Bags", "Shoes", "Electronics", "Jewelry"] as const;
export type ProductCategory = typeof ProdctCategories[number];

export interface IProduct {
  code: string;
  name: string;
  brand: string;
  category: ProductCategory;
  description: string;
  images: string[];
  price: number;
  previewImage: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IProductDocument extends Document, IProduct {}
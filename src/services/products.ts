import { IAppContext } from "context";
import { ProductModel } from "../models";
import { generateCode, runCountQuery, runFindQuery, runGetId } from "../utils";

export async function createProduct(args, ctx: IAppContext) {
  try {
    const newProduct = await ProductModel.create({
      ...args,
      code: await generateCode("Product"),
    });
    return newProduct;
  } catch (err) {
    throw err;
  }
}

export async function updateProduct(args, ctx: IAppContext) {
  try {
    const { id, ...updates } = args;
    const existingProduct = await ProductModel.findById(id);
    if (!existingProduct) throw new Error("Product not found");

    existingProduct.$set({
      ...updates,
    });
    await existingProduct.save();
    return existingProduct;
  } catch (err) {
    console.log(err);
    return err;
  }
}

export const getProducts = async (args, ctx: IAppContext) => {
  const Products = runFindQuery("Product", {
    ...args,
    filter: {
      ...( args.category ? { category: args.category } : {} ),
    }
  });
  
  return Products;
};

export const getProductsCount = async (args) => {
  return runCountQuery("Product", args);
};

export const getProductById = async (id: string) => {
  return runGetId("Product", id);
};

export const getProductsByIds = async (products: string[]) => {
  return ProductModel.find({ _id: { $in: products } });
};

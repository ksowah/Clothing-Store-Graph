import config from "config";
import { ProductCategory } from "models/index.types";
const { products } = require("./fake-products");
const { ProductModel } = require("./models/products/index");
const { default: mongoose } = require("mongoose");


async function seedProducts() {
  await mongoose.connect(config.db.uri);
  console.log("Connected to MongoDB");

  const enrichedProducts = await Promise.all(
    products.map(async (p) => ({
      ...p,
      code: generateProductCode(p.category as ProductCategory),
    }))
  );


  try {
    const result = await ProductModel.insertMany(enrichedProducts, {
      ordered: false,
    });
    console.log(`Inserted ${result.length} products.`);
  } catch (err) {
    console.error("Error inserting products:", err);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  }
}

seedProducts();



export function generateProductCode(category: ProductCategory): string {
  const prefix = category.slice(0, 3).toUpperCase();

  const now = new Date();
  const dayOfYear =
    Math.floor(
      (now.getTime() - new Date(now.getFullYear(), 0, 0).getTime()) /
        (1000 * 60 * 60 * 24)
    ) || 0;
  const timeCode = `${dayOfYear}${now.getHours()}`; 

  const randomPart = Math.random().toString(36).substring(2, 6); 

  return `${prefix}${timeCode}${randomPart}`; 
}

import services from "../../services";

const productResolvers = {
  Query: {
    getProducts: (_, args, ctx) => {
      return services.products.getProducts(args, ctx);
    },
    getProduct: (_, args) => {
      return services.products.getProductById(args.id);
    },
    getProductsCount: (_, args) => {
      return services.products.getProductsCount(args);
    },
  },
  Mutation: {
    updateProduct: (_, args) => {
      return services.products.updateProduct(args.id, args.input);
    },
    createProduct: (_, args, ctx) => {
      return services.products.createProduct(args, ctx);
    },
  },
};

export default productResolvers;
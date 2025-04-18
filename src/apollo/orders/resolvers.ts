import services from "../../services";

const orderResolvers = {
  OrderItem: {
    product: (orderItem, _, ctx) => {
      return services.products.getProductById(orderItem.product);
    },
  },
  Order: {
    user: (order, _, ctx) => {
      return services.users.getUserById(order.user);
    },
  },
  Query: {
    getOrders: (_, args, ctx) => {
      return services.orders.getOrders(args, ctx);
    },
    getOrder: (_, args) => {
      return services.orders.getOrderById(args.id);
    },
    getOrdersCount: (_, args) => {
      return services.orders.getOrdersCount(args);
    },
  },
  Mutation: {
    updateOrder: (_, args) => {
      return services.orders.updateOrder(args.id, args.input);
    },
    placeOrder: (_, args, ctx) => {
      return services.orders.placeOrder(args, ctx);
    },
    cancelOrder: (_, args, ctx) => {
      return services.orders.cancelOrder(args, ctx);
    },
    completeOrder: (_, args, ctx) => {
      return services.orders.completeOrder(args, ctx);
    },
    initiateOrderTransit: (_, args, ctx) => {
      return services.orders.initiateOrderTransit(args, ctx);
    },
    deliverOrder: (_, args, ctx) => {
      return services.orders.deliverOrder(args, ctx);
    },
  },
};

export default orderResolvers;
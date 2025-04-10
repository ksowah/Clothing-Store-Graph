import { IAppContext } from "context";
import { OrderModel } from "../models";
import { generateCode, runCountQuery, runFindQuery, runGetId } from "../utils";

export async function placeOrder(args, ctx: IAppContext) {
  try {
    const newOrder = await OrderModel.create({
      ...args,
      status: "Accepted",
      user: ctx.user,
      code: await generateCode("Order"),
    });
    return newOrder;
  } catch (err) {
    throw err;
  }
}

export async function updateOrder(args, ctx: IAppContext) {
  try {
    const { id, ...updates } = args;
    const existingOrder = await OrderModel.findById(id);
    if (!existingOrder) throw new Error("Order not found");

    existingOrder.$set({
      ...updates,
    });
    await existingOrder.save();
    return existingOrder;
  } catch (err) {
    console.log(err);
    return err;
  }
}

export async function initiateOrderTransit(args, ctx: IAppContext) {
  try {
    const existingOrder = await OrderModel.findById(args.id);
    if (!existingOrder) throw new Error("Order not found");

    existingOrder.status = "Transit";
    
    await existingOrder.save();
    return existingOrder;
  } catch (err) {
    console.log(err);
    return err;
  }
}

export async function deliverOrder(args, ctx: IAppContext) {
  try {
    const existingOrder = await OrderModel.findById(args.id);
    if (!existingOrder) throw new Error("Order not found");

    existingOrder.status = "Delivered";
    
    await existingOrder.save();
    return existingOrder;
  } catch (err) {
    console.log(err);
    return err;
  }
}

export async function cancelOrder(args, ctx: IAppContext) {
  try {
    const existingOrder = await OrderModel.findById(args.id);
    if (!existingOrder) throw new Error("Order not found");

    existingOrder.status = "Cancelled";
    
    await existingOrder.save();
    return existingOrder;
  } catch (err) {
    console.log(err);
    return err;
  }
}

export async function completeOrder(args, ctx: IAppContext) {
  try {
    const existingOrder = await OrderModel.findById(args.id);
    if (!existingOrder) throw new Error("Order not found");

    existingOrder.status = "Completed";
    
    await existingOrder.save();
    return existingOrder;
  } catch (err) {
    console.log(err);
    return err;
  }
}

export const getOrders = async (args, ctx: IAppContext) => {
  const Orders = runFindQuery("Order", {
    filter: {
      user: ctx.user,
    },
    ...args,
  });
  
  return Orders;
};

export const getOrdersCount = async (args) => {
  return runCountQuery("Order", args);
};

export const getOrderById = async (id: string) => {
  return runGetId("Order", id);
};

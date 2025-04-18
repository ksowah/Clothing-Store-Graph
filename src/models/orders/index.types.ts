import type { Document, Types } from "mongoose";

export const OrderStatuses = ["Pending", "Accepted",  "Transit", "Delivered", "Cancelled", "Completed"] as const;
export type OrderStatus = typeof OrderStatuses[number];

export interface IOrder {
  code: string;
  items: {
    product: Types.ObjectId;
    quantity: number;
  }[];
  user: Types.ObjectId;
  status: OrderStatus;
  totalPrice: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface IOrderDocument extends Document, IOrder {}
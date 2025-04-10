import { model, Schema, SchemaTypes } from "mongoose";
import { IOrderDocument, OrderStatuses } from "./index.types";

export const OrderSchema = new Schema<IOrderDocument>(
  {
    code:{
      type: SchemaTypes.String, 
      required: true,
    },
    products:{
      type: [SchemaTypes.ObjectId],
      ref: "Product",
      required: true,
    },
    user:{
      type: SchemaTypes.ObjectId,
      ref: "User",
      required: true,
    },
    status:{
      type: SchemaTypes.String,
      enum: OrderStatuses,
      required: true,
    },
    totalPrice:{
      type: SchemaTypes.Number,
      required: true,
    },

  },
  {
    timestamps: true,
  }
);


export const OrderModel = model<IOrderDocument>("Order", OrderSchema);
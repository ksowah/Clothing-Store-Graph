import { model, Schema, SchemaTypes } from "mongoose";
import { IOrderDocument, OrderStatuses } from "./index.types";

const orderItemSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  quantity: {
    type: Number,
    required: true
  }
})

export const OrderSchema = new Schema<IOrderDocument>(
  {
    code:{
      type: SchemaTypes.String, 
      required: true,
    },
    items: [orderItemSchema],
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
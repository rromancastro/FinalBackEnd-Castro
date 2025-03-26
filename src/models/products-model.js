import { Schema, model } from "mongoose";

const ProductSchema = new Schema({
    name: String,
    price: Number,
    description: String,
    category: String,
    stock: Number,
    image: String
});

export const ProductModel = model("Product", ProductSchema);
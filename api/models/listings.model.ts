import { Schema, model, Types } from "mongoose";

const schema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    price: {
        type: Number,
        required: true,
    },
    user: {
        type: Types.ObjectId,
        ref: "User",
        requried: true,
    },
}, { timestamps: true });

export const Listing = model("Listing", schema);

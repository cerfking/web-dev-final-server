import mongoose from "mongoose";

const onlineItemSchema = new mongoose.Schema({
        name: { type: String, required: true},
        price: { type: Number, required: true},
        images: { type:[String], default: undefined}
    },
    { collection: "onlineItems" });
export default onlineItemSchema;


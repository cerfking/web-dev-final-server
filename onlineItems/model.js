import mongoose from "mongoose";
import onlineItemSchema from "./schema.js";
const onlineItemModel = mongoose.model("onlineItems", onlineItemSchema);
export default onlineItemModel;
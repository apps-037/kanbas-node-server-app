import mongoose from "mongoose";
import moduleSchema from "./schema.js";
const model = mongoose.model("Module", moduleSchema);
export default model;
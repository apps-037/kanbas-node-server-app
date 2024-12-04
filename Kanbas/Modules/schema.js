import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema(
  {
    _id: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    module: { type: String, required: true, ref: "Module" }, 
  },
  { _id: false } 
);

const moduleSchema = new mongoose.Schema(
  {
    _id: { type: String, required: true }, 
    name: { type: String, required: true },
    description: { type: String, required: true },
    course: { type: String, required: true, ref: "CourseModel" },
    lessons: [lessonSchema],
  },
  { collection: "modules" } 
);

export default moduleSchema;

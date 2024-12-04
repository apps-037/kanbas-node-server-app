import mongoose from "mongoose";
const enrollmentSchema = new mongoose.Schema(
 {
   course: { type: String, required: true },
   user:   { type: String, required: true  }
 },
 { collection: "enrollments" }
);
export default enrollmentSchema;


import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    userId: mongoose.Schema.Types.ObjectId,
    title: String,
    completed: { type: Boolean, default: false },
  },
  { timestamps: true }
);

taskSchema.index({ userId: 1 });

export default mongoose.model("Task", taskSchema);

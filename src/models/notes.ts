import mongoose from "mongoose";
import { INotes } from "../interfaces";

const notesSchema = new mongoose.Schema<INotes>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  color: { type: String },
});

export default mongoose.model("Notes", notesSchema);

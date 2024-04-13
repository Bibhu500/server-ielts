import mongoose from "mongoose";

const WritingSchema = mongoose.Schema(
  {
    user_id: { type: String, required: true },
    imageUrl: { type: String },
    question: { type: String, required: true },
    answer: { type: String, required: true },
    result: { type: Object, required: true },
    wordCount: { type: Number, required: true },
    type: {type: String, required: true}
  },
  {
    timestamps: true,
  }
);


const Writing = mongoose.model("Writing", WritingSchema);

export {Writing};
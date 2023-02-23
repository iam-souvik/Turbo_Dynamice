import { Schema, model, models } from "mongoose";

const lectureSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    class: {
      type: String,
      required: true,
    },
    paid: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const LectureModel = models.lecture || model("lecture", lectureSchema);

export default LectureModel;

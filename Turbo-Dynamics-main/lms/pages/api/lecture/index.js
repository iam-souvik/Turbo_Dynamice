import connectDB from "../../../connect/connect";
import LectureModel from "../../../models/lecture.model";

export default async function Signup(req, res) {
  await connectDB();

  const { method } = req;

  switch (method) {
    case "GET": {
      try {
        const lecture = await LectureModel.find();
        return res.status(200).send(lecture);
      } catch (e) {
        return res.status(500).send(e.message);
      }
    }
  }
}

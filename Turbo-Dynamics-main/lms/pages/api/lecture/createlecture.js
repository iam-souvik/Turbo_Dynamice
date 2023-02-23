import connectDB from "../../../connect/connect";
import LectureModel from "../../../models/lecture.model";
import UserModel from "../../../models/user.model";
const jwt = require("jsonwebtoken");
export default async function Signup(req, res) {
  await connectDB();

  const { method } = req;

  switch (method) {
    case "POST": {
      const token = req.headers.token;
      if (!token) {
        return res.status(401).send("unauthorized");
      }
      const verify = jwt.verify(token, "SECRET");

      try {
        if (verify) {
          const user = await UserModel.findOne({ email: verify.email });
          if (user.role === "Lecturer") {
            const lecture = await LectureModel.create(req.body);
          } else {
            return res.status(401).send("forbidden");
          }
          return res
            .status(200)
            .send({ message: "lecture created successfully" });
        }
      } catch (e) {
        return res.status(500).send(e.message);
      }
    }
  }
}

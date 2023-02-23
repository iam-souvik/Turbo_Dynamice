import connectDB from "../../../connect/connect";
import UserModel from "../../../models/user.model";
const jwt = require("jsonwebtoken");
export default async function Signup(req, res) {
  await connectDB();

  const { method } = req;
  const { email, password, age, name } = req.body;
  const token = req.headers.token;

  switch (method) {
    case "POST": {
      if (!token) {
        return res.status(401).send("unauthorized");
      }
      try {
        const verify = jwt.verify(token, "SECRET");

        if (verify) {
          const user = await UserModel.findOne({ email: verify.email });
          if (user.role === "Admin") {
            const User = await UserModel.create({
              email,
              password,
              age,
              name,
              role: "Lecturer",
            });
            res.send(User);
          } else {
            res.status(403).send("forbidden");
          }
        }
      } catch (e) {
        res.status(500).send(e.message);
      }
    }
  }
}

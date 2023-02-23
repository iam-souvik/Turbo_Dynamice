import connectDB from "../../../connect/connect";
import UserModel from "../../../models/user.model";
const jwt = require("jsonwebtoken");

export default async function Login(req, res) {
  await connectDB();

  const { method } = req;
  const { email, password } = req.body;

  switch (method) {
    case "POST": {
      try {
        const user = await UserModel.findOne({ email, password });

        if (user) {
          const token = jwt.sign(
            { id: user._id, name: user.name, age: user.age, email: user.email },
            "SECRET",
            { expiresIn: "7 days" }
          );

          return res.send({ message: "login successfull", token, user });
        } else {
          res.status(401).send({ message: "invalid credintials" });
        }
      } catch (e) {
        res.status(500).send(e.message);
      }
    }
  }
}

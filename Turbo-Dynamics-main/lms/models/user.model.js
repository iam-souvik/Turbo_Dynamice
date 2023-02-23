import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  class: {
    type: String,
  },
  role: {
    type: String,
    enum: ["Admin", "Lecturer", "Student"],
    default: "Student",
  },
});

const UserModel = models.user || model("user", UserSchema);

export default UserModel;

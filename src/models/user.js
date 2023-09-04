import mongoose from "mongoose";

const User = mongoose.model("User", {
  name: {
    type: String,
    required: [true, "The Name field is required!"],
  },
  email: {
    type: String,
    required: [true, "The Email field is required!"],
  },
  password: {
    type: String,
    required: [true, "The Password field is required!"],
  }
})

export default User;

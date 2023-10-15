const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'Introduce el email'],
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: [true, 'Introduce una contraseña']
    }
  },
  {
    timestamps: true
  }
);

const User = model("User", userSchema);

module.exports = User;

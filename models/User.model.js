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
    },
    username: {
      type: String,
      required: [true, 'Introduce el nombre de usuario'],
      trim: true,
      minlength: [3, 'El nombre de usuario es demasiado corto']
    }
  },
  {
    timestamps: true
  }
);

const User = model("User", userSchema);

module.exports = User;

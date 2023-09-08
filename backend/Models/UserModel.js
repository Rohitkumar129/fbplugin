const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = mongoose.Schema(
    {
        Name: { type: String, required: true },
        Email: { type: String, unique: true, required: true },
        Password: { type: String, required: true }
    });

UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.Password);
};
UserSchema.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.Password = await bcrypt.hash(this.Password, salt);
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
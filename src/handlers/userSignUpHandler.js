const { User } = require("../db");
const bcrypt = require("bcryptjs");
const saltRounds = Number(process.env.SALT);
// const cookieParser = require("cookie-parser");
const generateToken = require("../utils/generateToken.js");

const userSignUpHandler = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ error: "Missing required fields (name, email, password)" });
    }

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ error: "Email already in use" });
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    const payload = {
      userId: newUser.id,
    };

    generateToken(res, payload);

    res.status(201).json({
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
    });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = userSignUpHandler;

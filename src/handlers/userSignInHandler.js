const { User } = require("../db");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken.js");

const userSignInHandler = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res
        .status(400)
        .json({ error: "Missing required fields (email, password)" });
    }

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const payload = { userId: user.id };
    generateToken(res, payload);

    res.status(200).json({
      id: user.id,
      name: user.name,
      email: user.email,
    });

  } catch (error) {
    console.error("Error signing in user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = userSignInHandler;

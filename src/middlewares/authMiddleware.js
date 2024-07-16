const jwt = require("jsonwebtoken");
const { User } = require("../db"); // Assuming User model from Sequelize

const verifyToken = async (req, res, next) => {
  let token;

  token = req.cookies.jwt;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      try {
        const user = await User.findByPk(decoded.userId);
        console.log(user);
        req.user = user;
        next();
      } catch (error) {
        console.error("Error fetching user:", error);
        return res.status(401).json({ error: "Unauthorized" });
      }
    } catch (error) {
      if (error.name === "JsonWebTokenError") {
        return res.status(401).json({ error: "Invalid token" });
      } else {
        console.error("Error verifying token:", error);
        return res.status(500).json({ error: "Internal server error" });
      }
    }
  } else {
    return res.status(401).json({ error: "Not authorized, no token" });
  }
};

module.exports = verifyToken;

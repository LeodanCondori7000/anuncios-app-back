const { User } = require("../db");
const bcrypt = require("bcryptjs");
const saltRounds = Number(process.env.SALT);

async function populateUser() {
  try {
    const users = await User.bulkCreate([
      {
        name: "Leodan Condori",
        email: "leodan.condori@email.com",
        password: await bcrypt.hash("1234", saltRounds),
      },
      {
        name: "Alice Smith",
        email: "alice.smith@example.com",
        password: await bcrypt.hash("1234", saltRounds),
      },
      {
        name: "Bob Johnson",
        email: "bob.johnson@company.com",
        password: await bcrypt.hash("1234", saltRounds),
      },
      {
        name: "Leo",
        email: "leo@email.com",
        password: await bcrypt.hash("1234", saltRounds),
      },
    ]);
    console.log("User table populated successfully");
  } catch (error) {
    console.error("Error populating User table:", error);
  }
}

module.exports = populateUser;

const { Ad } = require("../db"); // Import the Ad model

async function populateAd() {
  try {
    const ads = await Ad.bulkCreate([
      {
        body: "This is a great used car for sale!",
        creationDate: new Date(),
        categoryId: 1
      },
      {
        body: "Spacious apartment available for rent in the city center.",
        creationDate: new Date(),
        categoryId: 2
      },
      {
        body: "Looking for a reliable plumber for a bathroom leak repair.",
        creationDate: new Date(),
        categoryId: 3
      },
    ]);
    console.log("Ad table populated successfully");
  } catch (error) {
    console.error("Error populating Ad table:", error);
  }
}

module.exports = populateAd;

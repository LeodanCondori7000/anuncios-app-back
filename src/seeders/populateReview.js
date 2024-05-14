const { Review } = require("../db"); // Import the Review model

async function populateReview() {
  try {
    const reviews = await Review.bulkCreate([
      {
        likes: true,
        dislikes: false,
        userId: 1,
        adId: 1,
      },
      {
        likes: false,
        dislikes: false,
        userId: 1,
        adId: 2,
      },
      {
        likes: false,
        dislikes: false,
        userId: 2,
        adId: 1,
      },
      {
        likes: false,
        dislikes: false,
        userId: 2,
        adId: 2,
      },
    ]);
    console.log("Review table populated successfully");
  } catch (error) {
    console.error("Error populating Review table:", error);
  }
}

module.exports = populateReview;

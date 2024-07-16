const { Ad } = require("../../db");

const getAdsHandler = async (req, res) => {
  try {
    // Fetch all ads from the database
    const ads = await Ad.findAll();

    // Return the ads in the response
    return res.status(200).json(ads);
  } catch (error) {
    console.error("Error fetching ads:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = getAdsHandler;

const { Ad } = require("../../db");

const createAdsHandler = async (req, res) => {
  const { body, userId, categoryId } = req.body;

  try {
    // Validate required fields
    if (!body || !userId || !categoryId) {
      return res
        .status(400)
        .json({
          message: "Missing required fields: body,userId and categoryId",
        });
    }

    // Create a new ad
    const newAd = await Ad.create({ body, userId, categoryId });

    // Return the created ad in the response
    return res.status(201).json(newAd);
  } catch (error) {
    console.error("Error creating ad:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = createAdsHandler;

const { Ad } = require("../../db");

const updateAdsHandler = async (req, res) => {
  const { id } = req.params;
  const { body, userId, categoryId } = req.body;

  try {
    const ad = await Ad.findByPk(id);

    if (!ad) {
      return res.status(404).json({ message: "Ad not found" });
    }

    if (userId !== ad.userId) {
      return res
        .status(403)
        .json({ message: "You are not authorized to update this ad" });
    }
    ad.body = body || ad.body;
    ad.categoryId = categoryId || ad.categoryId;

    await ad.save();

    res.status(200).json({ message: "Ad updated successfully", ad });
  } catch (error) {
    console.error("Error updating ad:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = updateAdsHandler;

const { Ad } = require("../../db");

const updateAdsHandler = async (req, res) => {
  const { id } = req.params;

  try {
    await Ad.destroy({
      where: {
        id,
      },
    });
    res.status(200).json({ message: "Ad deleted successfully" });
  } catch (error) {
    console.error("Error updating ad:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = updateAdsHandler;

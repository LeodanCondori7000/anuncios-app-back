const { Category } = require("../../db");

const getCategoriesHandler = async (req, res) => {
  try {
    // Fetch all categories from the database
    const categories = await Category.findAll();

    // Return the categories in the response
    return res.status(200).json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = getCategoriesHandler;

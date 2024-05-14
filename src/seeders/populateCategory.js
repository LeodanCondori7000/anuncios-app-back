const { Category } = require("../db");

async function populateCategory() {
  try {
    const categories = await Category.bulkCreate([
      {
        name: "Vehiculos",
      },
      {
        name: "Inmuebles",
      },
      {
        name: "Trabajos",
      },
    ]);
    console.log("Category table populated successfully");
  } catch (error) {
    console.error("Error populating Category table:", error);
  }
}

module.exports = populateCategory;

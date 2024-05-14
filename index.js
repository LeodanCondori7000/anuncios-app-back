require("dotenv").config();
const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const port = process.env.PORT || 5000;
const populateCategory = require("./src/seeders/populateCategory.js");
const populateUser = require("./src/seeders/populateUser.js");
const populateAd = require("./src/seeders/populateAd.js");
const populateReview = require("./src/seeders/populateReview.js");

// Syncing all the models at once.
conn
  .sync({ force: true })
  .then(() => {
    server.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  })
  .then(() => populateCategory())
  .then(() => populateUser())
  .then(() => populateAd())
  .then(() => populateReview())
  .catch((error) => console.error(error));

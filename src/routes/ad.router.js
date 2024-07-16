const { Router } = require("express");
const router = Router();

const getAdsHandler = require("../handlers/adsHandler/getAdsHandler");
const createAdsHandler = require("../handlers/adsHandler/createAdsHandler");
const updateAdsHandler = require("../handlers/adsHandler/updateAdsHandler");
const deleteAdsHandler = require("../handlers/adsHandler/deleteAdsHandler");

router.route("/ads").get(getAdsHandler).post(createAdsHandler);
router.route("/ads/:id").put(updateAdsHandler).delete(deleteAdsHandler);

module.exports = router;

const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const searchController = require("../controllers/searches.js");


router.route("/")
.get(wrapAsync( searchController.searchIndex));

module.exports = router;
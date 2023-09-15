const express = require("express");
const {
  createShortenUrl,
  redirectShortUrl
} = require("../controllers/url_controller");

const router = express.Router();

// url routes
router.post("/shorten", createShortenUrl);
router.get("/:shortId", redirectShortUrl);


module.exports = router;
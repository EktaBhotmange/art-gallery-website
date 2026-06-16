const express = require("express");
const router = express.Router();

const {
  getArtworks,
  createArtwork,
  deleteArtwork,
} = require("../controllers/artworkController");

router.get("/", getArtworks);
router.post("/", createArtwork);
router.delete("/:id", deleteArtwork);

module.exports = router;
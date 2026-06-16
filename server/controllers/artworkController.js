const Artwork = require("../models/Artwork");

// GET ALL ARTWORKS
const getArtworks = async (req, res) => {
  try {
    const artworks = await Artwork.find();

    res.status(200).json(artworks);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// CREATE ARTWORK
const createArtwork = async (req, res) => {
  try {
    const artwork = await Artwork.create(req.body);

    res.status(201).json(artwork);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteArtwork = async (req, res) => {
  try {
    const artwork = await Artwork.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json(artwork);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getArtworks,
  createArtwork,
  deleteArtwork,
};
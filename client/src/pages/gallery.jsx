import { useState, useEffect } from "react";
import axios from "axios";

function Gallery() {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
  const fetchArtworks = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/artworks"
      );

      setArtworks(res.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  fetchArtworks();
  }, []); 

  const [filter, setFilter] = useState("All");

  const filteredArteworks = filter === "All" 
                  ? artworks
                  : artworks.filter(
                    (artwork) => artwork.category === filter 
                  );

  if (loading) {
  return (
    <div className="text-center py-20">
      Loading artworks...
    </div>
  );
}

  return (
    <main className="py-20">
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1
            className="text-5xl md:text-6xl"
            style={{ fontFamily: "Playfair Display" }}
          >
            Gallery
          </h1>

          <p className="mt-4 text-gray-600">
            Explore our collection of portraits, wedding art,
            sketches and handcrafted creations.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <button
                onClick={() => setFilter("All")}
                className={`px-6 py-2 rounded-full ${
                filter === "All"
                ? "bg-black text-white"
                : "border"
              }`}
                >  All
          </button>

          <button
                onClick={() => setFilter("Portraits")} 
                className="px-6 py-2 border rounded-full">
            Portraits
          </button>

          <button className="px-6 py-2 border rounded-full">
            Wedding
          </button>

          <button className="px-6 py-2 border rounded-full">
            Sketches
          </button>

          <button className="px-6 py-2 border rounded-full">
            Handcrafted
          </button>
        </div>

        {/* Artwork Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {artworks.map((artwork) => (
            <div
              key={artwork.title}
              className="group"
            >
              <div className="overflow-hidden rounded-3xl">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-700"
                />
              </div>

              <h3 className="text-xl mt-4 font-medium">
                {artwork.title}
              </h3>

              <p className="text-gray-500">
                {artwork.category}
              </p>
            </div>
          ))}

        </div>

      </div>
    </main>
  );
}

export default Gallery;
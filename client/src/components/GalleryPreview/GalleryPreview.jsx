import { Link } from "react-router-dom";

function GalleryPreview() {
  const images = [
    "https://picsum.photos/600/700?random=21",
    "https://picsum.photos/600/700?random=22",
    "https://picsum.photos/600/700?random=23",
    "https://picsum.photos/600/700?random=24",
  ];

  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-14">
          <p className="uppercase tracking-[0.3em] text-sm text-gray-500">
            Gallery
          </p>

          <h2
            className="text-4xl md:text-5xl mt-3"
            style={{ fontFamily: "Playfair Display" }}
          >
            A Glimpse of Our Work
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl"
            >
              <img
                src={image}
                alt="Artwork"
                className="w-full h-[350px] object-cover hover:scale-105 transition duration-700"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/gallery"
            className="px-8 py-3 border border-black rounded-full hover:bg-black hover:text-white transition"
          >
            View Full Gallery
          </Link>
        </div>

      </div>
    </section>
  );
}

export default GalleryPreview;
import { Link } from "react-router-dom";

function ArtworkDetail() {
  return (
    <main className="py-20">
      <div className="max-w-7xl mx-auto px-8">

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Artwork Image */}
          <div>
            <img
              src="https://picsum.photos/800/1000?random=100"
              alt="Artwork"
              className="w-full rounded-3xl object-cover"
            />
          </div>

          {/* Artwork Information */}
          <div className="flex flex-col justify-center">

            <p className="uppercase tracking-[0.3em] text-sm text-gray-500">
              Portrait Art
            </p>

            <h1
              className="text-5xl mt-4"
              style={{ fontFamily: "Playfair Display" }}
            >
              Custom Couple Portrait
            </h1>

            <p className="mt-8 text-gray-600 leading-relaxed">
              A handcrafted portrait created with attention to
              detail and personalized according to your
              preferences. Perfect for anniversaries,
              weddings, birthdays, and memorable occasions.
            </p>

            <div className="mt-8">
              <h3 className="font-semibold">
                Category
              </h3>

              <p className="text-gray-600">
                Portraits
              </p>
            </div>

            <div className="mt-8">
              <h3 className="font-semibold">
                Customisation Available
              </h3>

              <p className="text-gray-600">
                Yes
              </p>
            </div>

            <div className="mt-10 flex gap-4">

              <Link
                to="/custom-order"
                className="px-8 py-3 bg-black text-white rounded-full"
              >
                Request Similar Artwork
              </Link>

              <Link
                to="/gallery"
                className="px-8 py-3 border border-black rounded-full"
              >
                Back To Gallery
              </Link>

            </div>

          </div>

        </div>

      </div>
    </main>
  );
}

export default ArtworkDetail;
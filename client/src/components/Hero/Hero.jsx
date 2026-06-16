import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>
            <p className="uppercase tracking-[0.35em] text-sm text-gray-500 mb-4">
              Rukvant Art
            </p>

            <h1
              className="text-5xl md:text-7xl xl:text-8xl font-semibold leading-tight"
              style={{ fontFamily: "Playfair Display" }}
            >
              Handcrafted Art
              <br />
              for Meaningful
              <br />
              Spaces
            </h1>

            <p className="mt-8 text-gray-600 text-lg max-w-xl leading-relaxed">
              Discover handcrafted creations designed to add
              elegance, warmth and personality to your home.
              Every piece is thoughtfully made to celebrate
              creativity and craftsmanship.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                to="/gallery"
                className="px-8 py-3 bg-black text-white rounded-full hover:scale-105 transition duration-300"
              >
                Explore Collection
              </Link>

              <Link
                to="/custom-order"
                className="px-8 py-3 border border-black rounded-full hover:bg-black hover:text-white transition duration-300"
              >
                Custom Order
              </Link>

            </div>

            <div className="mt-12 flex gap-10">
              <div>
                <h3 className="text-3xl font-semibold">150+</h3>
                <p className="text-gray-500">Artworks Created</p>
              </div>

              <div>
                <h3 className="text-3xl font-semibold">100+</h3>
                <p className="text-gray-500">Happy Clients</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1200"
              alt="Artwork"
              className="w-full h-[650px] object-cover rounded-3xl shadow-xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
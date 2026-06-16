import FeaturedCollection from "../components/FeaturedCollection/FeaturedCollection.jsx";
import Hero from "../components/Hero/Hero.jsx"
import BestSellers from "../components/Bestsellers/BestSellers.jsx";
import CustomOrderProcess from "../components/CustomOrderProcess/CustomOrderProcess.jsx";
import Testimonials from "../components/testimonials/Testimonials.jsx";
import GalleryPreview from "../components/GalleryPreview/GalleryPreview.jsx";

function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Content */}
            <div>
              <p className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-4">
                Rukvant Art
              </p>

              <h1
                className="text-5xl md:text-7xl font-semibold leading-tight"
                style={{ fontFamily: "Playfair Display" }}
              >
                Handcrafted Art
                <br />
                for Meaningful Spaces
              </h1>

              <p className="mt-8 text-gray-600 text-lg max-w-lg">
                Discover unique handmade creations designed to
                bring elegance, personality, and warmth into
                every space.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <button className="px-8 py-3 bg-black text-white rounded-full hover:scale-105 transition duration-300">
                  Explore Collection
                </button>

                <button className="px-8 py-3 border border-black rounded-full hover:bg-black hover:text-white transition duration-300">
                  Custom Order
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div>
              <img
                src="/rukvant1.jpg"
                alt="Artwork"
                className="w-full h-[650px] object-cover rounded-3xl shadow-lg"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <FeaturedCollection />
      <BestSellers />
      <CustomOrderProcess />
      <GalleryPreview />
      <Testimonials/>
      {/* <GalleryPreview /> */}

    </main>
  );
}

export default Home;
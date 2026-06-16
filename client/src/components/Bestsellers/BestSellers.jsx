function BestSellers() {
  const products = [
    {
      title: "Custom Portrait Art",
      description:
        "Handcrafted portraits created from your cherished memories.",
      image: "https://picsum.photos/800/1000?random=11",
    },
    {
      title: "Wedding Keepsakes",
      description:
        "Elegant personalized gifts designed for unforgettable moments.",
      image: "https://picsum.photos/800/1000?random=12",
    },
    {
      title: "Handcrafted Decor",
      description:
        "Unique decorative pieces crafted with creativity and care.",
      image: "https://picsum.photos/800/1000?random=13",
    },
  ];

  return (
    <section className="py-28 bg-[#faf9f6]">
      <div className="max-w-7xl mx-auto px-8">

        <div className="mb-14">
          <p className="uppercase tracking-[0.3em] text-sm text-gray-500">
            Our Collection
          </p>

          <h2
            className="text-4xl md:text-5xl mt-3"
            style={{ fontFamily: "Playfair Display" }}
          >
            Signature Creations
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">

          {products.map((product) => (
            <div
              key={product.title}
              className="group"
            >
              <div className="overflow-hidden rounded-3xl">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-[500px] object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <h3 className="text-2xl mt-6 font-medium">
                {product.title}
              </h3>

              <p className="text-gray-600 mt-3">
                {product.description}
              </p>

              <button className="mt-5 border border-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition">
                View Details
              </button>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default BestSellers;
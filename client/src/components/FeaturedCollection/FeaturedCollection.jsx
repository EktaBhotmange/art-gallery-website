function FeaturedCollection() {
  const collections = [
    {
      title: "Resin Art",
      image: "https://picsum.photos/500/700?random=1",
    },
    {
      title: "Wedding Gifts",
      image: "https://picsum.photos/500/700?random=2",
    },
    {
      title: "Custom Creations",
      image: "https://picsum.photos/500/700?random=3",
    },
    {
      title: "Home Decor",
      image: "https://picsum.photos/500/700?random=4",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        <h2
          className="text-4xl md:text-5xl mb-12"
          style={{ fontFamily: "Playfair Display" }}
        >
          Featured Collection
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {collections.map((item) => (
            <div
              key={item.title}
              className="cursor-pointer group"
            >
              <div className="overflow-hidden rounded-2xl shadow-md">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <h3 className="mt-4 text-xl font-medium">
                {item.title}
              </h3>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default FeaturedCollection;
function Testimonials() {
  const testimonials = [
    {
      name: "Priya Sharma",
      review:
        "The portrait exceeded my expectations. Every detail was beautifully captured.",
    },
    {
      name: "Rahul & Sneha",
      review:
        "Our wedding keepsake turned out amazing. A truly memorable experience.",
    },
    {
      name: "Aditi Joshi",
      review:
        "Professional, creative and delivered exactly what I envisioned.",
    },
  ];

  return (
    <section className="py-28 bg-[#faf9f6]">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl"
            style={{ fontFamily: "Playfair Display" }}
          >
            What Our Clients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item) => (
            <div
              key={item.name}
              className="bg-white p-8 rounded-3xl shadow-sm"
            >
              <div className="text-xl mb-4">
                ★★★★★
              </div>

              <p className="text-gray-600 italic">
                "{item.review}"
              </p>

              <h4 className="mt-6 font-medium">
                — {item.name}
              </h4>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;
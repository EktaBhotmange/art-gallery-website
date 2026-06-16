function CustomOrderProcess() {
  const steps = [
    {
      number: "01",
      title: "Share Your Idea",
      description:
        "Tell us about your vision, occasion, style and preferences.",
    },
    {
      number: "02",
      title: "Design & Approval",
      description:
        "We discuss concepts, references and finalize the artwork design.",
    },
    {
      number: "03",
      title: "Craft & Deliver",
      description:
        "Your artwork is handcrafted with care and delivered to your doorstep.",
    },
  ];

  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-20">
          <p className="uppercase tracking-[0.3em] text-sm text-gray-500">
            Custom Orders
          </p>

          <h2
            className="text-4xl md:text-5xl mt-4"
            style={{ fontFamily: "Playfair Display" }}
          >
            Bring Your Vision To Life
          </h2>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Whether it's a portrait, wedding keepsake, sketch,
            or handcrafted gift, we transform your ideas into
            meaningful creations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">

          {steps.map((step) => (
            <div
              key={step.number}
              className="border border-gray-200 rounded-3xl p-10"
            >
              <span className="text-5xl font-light text-gray-300">
                {step.number}
              </span>

              <h3 className="text-2xl mt-6 font-medium">
                {step.title}
              </h3>

              <p className="mt-4 text-gray-600">
                {step.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default CustomOrderProcess;
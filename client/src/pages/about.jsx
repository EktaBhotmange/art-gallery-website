function About() {
  return (
    <main className="py-20">
      <div className="max-w-5xl mx-auto px-8">

        <div className="text-center mb-16">
          <h1
            className="text-5xl md:text-6xl"
            style={{ fontFamily: "Playfair Display" }}
          >
            About Rukvant Art
          </h1>

          <p className="mt-4 text-gray-600">
            Crafting meaningful creations with passion, creativity, and attention to detail.
          </p>
        </div>

        <div className="space-y-8 text-lg text-gray-700 leading-relaxed">

          <p>
            Rukvant Art is dedicated to creating unique handcrafted artworks
            that celebrate special moments and personal stories.
          </p>

          <p>
            From custom portraits and wedding keepsakes to sketches,
            handmade gifts, and decorative creations, every piece is
            designed with care and artistic excellence.
          </p>

          <p>
            Our goal is to transform emotions, memories, and ideas into
            beautiful creations that can be cherished for years to come.
          </p>

        </div>

      </div>
    </main>
  );
}

export default About;
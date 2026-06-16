function CustomerOrder() {
  return (
    <main className="py-20">
      <div className="max-w-5xl mx-auto px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1
            className="text-5xl md:text-6xl"
            style={{ fontFamily: "Playfair Display" }}
          >
            Custom Order
          </h1>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Share your vision with us and we'll create a unique,
            handcrafted piece tailored specifically for you.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6 bg-white p-8 rounded-3xl shadow-sm">

          <div>
            <label className="block mb-2 font-medium">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-xl px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-xl px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Phone Number
            </label>

            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full border border-gray-300 rounded-xl px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Artwork Type
            </label>

            <select
              className="w-full border border-gray-300 rounded-xl px-4 py-3"
            >
              <option>Portrait Art</option>
              <option>Wedding Collection</option>
              <option>Sketches</option>
              <option>Handcrafted Gifts</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Budget Range
            </label>

            <select
              className="w-full border border-gray-300 rounded-xl px-4 py-3"
            >
              <option>Under ₹1000</option>
              <option>₹1000 - ₹3000</option>
              <option>₹3000 - ₹5000</option>
              <option>₹5000+</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Project Description
            </label>

            <textarea
              rows="6"
              placeholder="Describe your requirements..."
              className="w-full border border-gray-300 rounded-xl px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Reference Image
            </label>

            <input
              type="file"
              className="w-full border border-gray-300 rounded-xl px-4 py-3"
            />
          </div>

          <button
            type="submit"
            className="px-8 py-3 bg-black text-white rounded-full hover:opacity-90 transition"
          >
            Submit Request
          </button>

        </form>

      </div>
    </main>
  );
}

export default CustomerOrder;
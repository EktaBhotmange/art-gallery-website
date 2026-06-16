import { useState } from "react";
import axios from "axios";

function Contact() {

    const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await axios.post(
      "http://localhost:5000/api/contacts",
      formData
    );

    alert("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

  } catch (error) {
    console.error(error);
    alert("Failed to send message");
  }
  };

  return (
    <main className="py-20">
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1
            className="text-5xl md:text-6xl"
            style={{ fontFamily: "Playfair Display" }}
          >
            Get In Touch
          </h1>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Have an idea, custom order, or a question? We'd love
            to hear from you and help bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Contact Info */}
          <div>
            <h2
              className="text-3xl mb-6"
              style={{ fontFamily: "Playfair Display" }}
            >
              Contact Information
            </h2>

            <div className="space-y-6">

              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600">
                  b.ektaa20@gmail.com
                </p>
              </div>

              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-600">
                  +91 7666817449
                </p>
              </div>

              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-gray-600">
                  Maharashtra, India
                </p>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit}
            className="space-y-6"
          >

            <div>
              <label className="block mb-2 font-medium">
                Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Phone
              </label>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Message
              </label>

              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your idea..."
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-black"
              />
            </div>

            <button
              type="submit"
              className="px-8 py-3 bg-black text-white rounded-full hover:opacity-90 transition"
            >
              Send Message
            </button>

          </form>

        </div>
      </div>
    </main>
  );
}

export default Contact;
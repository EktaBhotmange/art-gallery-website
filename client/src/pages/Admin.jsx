import { useState, useEffect } from "react";
import axios from "axios";

function Admin() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    image: "",
    description: "",
  });
  const [artworks, setArtworks] = useState([]);
  const [messages, setMessages] = useState([]);

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
        "http://localhost:5000/api/artworks",
        {
          ...formData,
          featured: false,
        }
      );

      alert("Artwork Added Successfully!");
      fetchArtworks();

      setFormData({
        title: "",
        category: "",
        image: "",
        description: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to add artwork");
    }
  };

  const fetchArtworks = async () => {
  try {
    const res = await axios.get(
      "http://localhost:5000/api/artworks"
    );

    setArtworks(res.data);
  } catch (error) {
    console.error(error);
  }
  };

  const fetchMessages = async () => {
  try {
    const res = await axios.get(
      "http://localhost:5000/api/contacts"
    );

    setMessages(res.data);
  } catch (error) {
    console.error(error);
  }
  };

  useEffect(() => {
  fetchArtworks();
  fetchMessages();
}, []);

  const handleDelete = async (id) => {
  try {
    await axios.delete(
      `http://localhost:5000/api/artworks/${id}`
    );

    fetchArtworks();
  } catch (error) {
    console.error(error);
  }
  };

  return (
    <main className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-8">

        <h1
          className="text-5xl mb-10 text-center"
          style={{ fontFamily: "Playfair Display" }}
        >
          Admin Dashboard
        </h1>

        <div className="bg-white p-8 rounded-3xl shadow-md">

          <h2 className="text-2xl mb-6 font-medium">
            Add New Artwork
          </h2>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div className="bg-white p-8 rounded-3xl shadow-md mt-10">

            <h2 className="text-2xl mb-6">
              All Artworks
            </h2>

        <div className="space-y-4">

            {artworks.map((artwork) => (
                
        <div
           key={artwork._id}
           className="border rounded-xl p-4"
        >
           <h3 className="font-semibold">
            {artwork.title}
           </h3>

           <p className="text-gray-600">
            {artwork.category}
            </p>

            <button
                onClick={() => handleDelete(artwork._id)}
                className="mt-3 px-4 py-2 bg-red-500 text-white rounded-lg"
            >
                Delete
            </button>

            <div className="bg-white p-8 rounded-3xl shadow-md mt-10">

  <h2 className="text-2xl mb-6">
    Contact Messages
  </h2>

  <div className="space-y-4">

    {messages.map((message) => (
      <div
        key={message._id}
        className="border rounded-xl p-4"
      >
        <h3 className="font-semibold">
          {message.name}
        </h3>

        <p className="text-gray-600">
          {message.email}
        </p>

        <p className="text-gray-600">
          {message.phone}
        </p>

        <p className="mt-2">
          {message.message}
        </p>
        </div>
        ))}

    </div>

    </div>

        </div>
        ))}

    </div>

</div>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Artwork Title"
              className="w-full border border-gray-300 rounded-xl px-4 py-3"
              required
            />

            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="Category"
              className="w-full border border-gray-300 rounded-xl px-4 py-3"
              required
            />

            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="Image URL"
              className="w-full border border-gray-300 rounded-xl px-4 py-3"
              required
            />

            <textarea
              rows="5"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Artwork Description"
              className="w-full border border-gray-300 rounded-xl px-4 py-3"
              required
            />

            <button
              type="submit"
              className="px-8 py-3 bg-black text-white rounded-full hover:opacity-90 transition"
            >
              Add Artwork
            </button>

          </form>

        </div>

      </div>
    </main>
  );
}

export default Admin;
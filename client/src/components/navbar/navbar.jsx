import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link
            to="/"
            className="text-3xl font-semibold tracking-wide"
            style={{ fontFamily: "Playfair Display" }}
          >
            Rukvant Art
          </Link>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-8">

            <Link
              to="/gallery"
              className="text-gray-700 hover:text-black transition"
            >
              Gallary
            </Link>

            <Link
              to="/about"
              className="text-gray-700 hover:text-black transition"
            >
              About
            </Link>

            <Link
              to="/custom-order"
              className="text-gray-700 hover:text-black transition"
            >
              Custom Orders
            </Link>

            <Link
              to="/contact"
              className="text-gray-700 hover:text-black transition"
            >
              Contact
            </Link>

            <Link
              to="/login"
              className="px-5 py-2 border border-black rounded-full hover:bg-black hover:text-white transition"
            >
              Login
            </Link>

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
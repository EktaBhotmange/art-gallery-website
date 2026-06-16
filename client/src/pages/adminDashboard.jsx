import { Link } from "react-router-dom";

function AdminDashboard() {
  return (
    <div className="min-h-screen flex bg-[#f8f5f0]">
      
      {/* Sidebar */}
      <aside className="w-64 bg-black text-white p-6">
        <h2 className="text-2xl font-bold mb-10">
          Rukvant Art
        </h2>

        <nav className="space-y-4">
          <Link
            to="/admin"
            className="block hover:text-yellow-400"
          >
            Dashboard
          </Link>

          <Link
            to="/admin/artworks"
            className="block hover:text-yellow-400"
          >
            Artworks
          </Link>

          <Link
            to="/admin/messages"
            className="block hover:text-yellow-400"
          >
            Messages
          </Link>

          <button className="text-red-400 mt-10">
            Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">

        <h1 className="text-4xl font-bold mb-10">
          Admin Dashboard
        </h1>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500">
              Total Artworks
            </h3>
            <p className="text-3xl font-bold mt-2">
              24
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500">
              Contact Messages
            </h3>
            <p className="text-3xl font-bold mt-2">
              18
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500">
              Featured Artworks
            </h3>
            <p className="text-3xl font-bold mt-2">
              8
            </p>
          </div>

        </div>

      </main>

    </div>
  );
}

export default AdminDashboard;
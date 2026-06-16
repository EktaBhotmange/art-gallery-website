import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar.jsx";
import Footer from "./components/footer/footer.jsx";

import Home from "./pages/home";
import Gallery from "./pages/gallery";
import About from "./pages/about";
import Contact from "./pages/contact";
import CustomerOrder from "./pages/customerOrder";
import Login from "./pages/login";
import ArtworkDetail from "./pages/artworkDetail.jsx";
import Admin from "./pages/Admin.jsx";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminDashboard from "./pages/adminDashboard.jsx";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/custom-order" element={<CustomerOrder />} />
        <Route path="/login" element={<Login />} />
        <Route path="/artwork/:id" element={<ArtworkDetail />} />
        <Route
          path="/admin"
          element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
          }/>
        <Route path="/admin" element={<AdminDashboard />} /> 
      </Routes>
        
    <Footer />
    </BrowserRouter>
  );
}

export default App;
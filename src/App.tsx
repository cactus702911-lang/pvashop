import { HashRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import TopBar from "@/components/common/TopBar";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import About from "@/pages/About";
import Shop from "@/pages/Shop";
import ProductDetails from "@/pages/ProductDetails";
import Blog from "@/pages/Blog";
import Contact from "@/pages/Contact";
import ScrollToTop from "@/utils/ScrollToTop";
import Login from "./pages/Admin/Login";
import Dashboard from "./pages/Admin/Dashboard";

const MainLayout = () => (
  <div className="flex flex-col min-h-screen">
    <TopBar />
    <Header />
    <main className="flex-grow">
      <Outlet />
    </main>
    <Footer />
    <WhatsAppButton />
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Admin Routes */}
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />

        {/* Public Routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<ProductDetails />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

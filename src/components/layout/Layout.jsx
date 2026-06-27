// src/components/layout/Layout.jsx
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div className="min-h-screen">
    <div className="noise-overlay" aria-hidden="true" />
    <Navbar />
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;

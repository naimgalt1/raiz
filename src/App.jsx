import { useCallback, useState } from 'react';
import AnnouncementBar from './components/AnnouncementBar.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Values from './components/Values.jsx';
import Catalog from './components/Catalog.jsx';
import Process from './components/Process.jsx';
import Newsletter from './components/Newsletter.jsx';
import Footer from './components/Footer.jsx';
import ProductModal from './components/ProductModal.jsx';

export default function App() {
  const [cartCount, setCartCount] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const addToCart = useCallback((_product, quantity = 1) => {
    setCartCount((count) => count + quantity);
  }, []);

  const closeProduct = useCallback(() => setSelectedProduct(null), []);

  const scrollToNewsletter = () => document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      <AnnouncementBar onSubscribe={scrollToNewsletter} />
      <Navbar cartCount={cartCount} />
      <main>
        <Hero />
        <Values />
        <Catalog onOpen={setSelectedProduct} onAdd={addToCart} />
        <Process />
        <Newsletter />
      </main>
      <Footer />
      <ProductModal key={selectedProduct?.id} product={selectedProduct} onClose={closeProduct} onAdd={addToCart} />
    </>
  );
}

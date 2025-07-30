import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { useTheme } from '../context/ThemeContext';
import { Product } from '../types';
import './Home.css';

const Home: React.FC = () => {
  const { theme } = useTheme();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data.slice(0, 8)); // Limit to 8 products for demo
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>Error</h2>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Try Again</button>
      </div>
    );
  }

  return (
    <div className={`home-page home-${theme}`}>
      <div className="hero-section">
        <h1 className="hero-title">Welcome to Our Store</h1>
        <p className="hero-description">
          Discover amazing products with our beautiful theme switcher. 
          Each theme offers a unique shopping experience with different layouts, 
          colors, and typography.
        </p>
        <button className="cta-button">Explore Products</button>
      </div>

      <section className="products-section">
        <h2 className="section-title">Featured Products</h2>
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="features-section">
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Multiple Themes</h3>
            <p>Switch between three distinct themes for different experiences</p>
          </div>
          <div className="feature-card">
            <h3>Responsive Design</h3>
            <p>Perfect experience on desktop, tablet, and mobile devices</p>
          </div>
          <div className="feature-card">
            <h3>Fast & Secure</h3>
            <p>Built with modern technologies for optimal performance</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 
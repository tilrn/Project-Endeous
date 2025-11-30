import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import NavigationBar from '../Components/NavigationBar';
import Footer from '../Components/Footer';
import { Modal, IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import './Store.css';


// Sample data for products
const products = [
  {
    id: 1,
    name: 'Premium Headphones',
    price: '$199.99',
    images: [
      '/img/lorem-4961251_1280.jpg',
      '/img/lorem-4920219_1280.jpg',
      '/img/lorem-4995945_1280.jpg',
    ],
    description: 'High-quality wireless headphones with noise cancellation.',
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: '$149.99',
    images: [
      '/img/lorem-4951629_1280.jpg',
      '/img/lorem-4961138_1280.jpg',
      '/img/lorem-4992299_1280.jpg',
    ],
    description: 'Feature-rich smartwatch with health monitoring.',
  },
  {
    id: 3,
    name: 'Wireless Speaker',
    price: '$89.99',
    images: [
      '/img/lorem-4920209_1280.jpg',
      '/img/lorem-4977985_1280.jpg',
      '/img/lorem-4873425_1280.jpg',
    ],
    description: 'Portable Bluetooth speaker with amazing sound quality.',
  },
  {
    id: 4,
    name: 'Gaming Mouse',
    price: '$59.99',
    images: [
      '/img/lorem-5006124_1280.jpg',
      '/img/lorem-4961251_1280.jpg',
      '/img/lorem-4920219_1280.jpg',
    ],
    description: 'High-precision gaming mouse with RGB lighting.',
  },
  {
    id: 5,
    name: 'Mechanical Keyboard',
    price: '$129.99',
    images: [
      '/img/lorem-4995945_1280.jpg',
      '/img/lorem-4951629_1280.jpg',
      '/img/lorem-4961138_1280.jpg',
    ],
    description: 'Premium mechanical keyboard with customizable switches.',
  },
  {
    id: 6,
    name: 'USB Microphone',
    price: '$79.99',
    images: [
      '/img/lorem-4992299_1280.jpg',
      '/img/lorem-4920209_1280.jpg',
      '/img/lorem-4977985_1280.jpg',
    ],
    description: 'Professional USB microphone for streaming and recording.',
  }
];

function Store() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [totalImages, setTotalImages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Calculate total images to load
  useEffect(() => {
    const productsImages = products.reduce((total, product) => total + product.images.length, 0);
    setTotalImages(productsImages);
  }, []);

  // Function to handle image load
  const handleImageLoad = () => {
    setImagesLoaded(prev => {
      const newCount = prev + 1;
      if (newCount >= totalImages) {
        setIsLoading(false);
      }
      return newCount;
    });
  };

  // Function to handle image load error
  const handleImageError = () => {
    setImagesLoaded(prev => {
      const newCount = prev + 1;
      if (newCount >= totalImages) {
        setIsLoading(false);
      }
      return newCount;
    });
  };

  // Preload all images
  useEffect(() => {
    if (totalImages === 0) return;

    // Set a maximum loading time of 8 seconds
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 8000);

    const preloadImages = () => {
      // Preload product images
      products.forEach(product => {
        product.images.forEach(imageUrl => {
          const img = new Image();
          img.onload = handleImageLoad;
          img.onerror = handleImageError;
          img.src = imageUrl;
        });
      });
    };

    preloadImages();

    return () => clearTimeout(timeout);
  }, [totalImages]);


  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setCurrentImageIndex(0);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedProduct(null);
    setCurrentImageIndex(0);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? selectedProduct.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === selectedProduct.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      <Helmet>
        <title>Store | Project Endeous - Shop Art & Merchandise</title>
        <meta name="description" content="Shop unique art prints, merchandise, and creative products from Project Endeous. Support the artist and bring beautiful creations into your life." />
        <meta name="keywords" content="art store, shop, merchandise, art prints, Project Endeous store, buy art, creative products" />
        <link rel="canonical" href="https://projectendeous.com/store" />
        <meta property="og:title" content="Store | Project Endeous - Shop Art & Merchandise" />
        <meta property="og:description" content="Shop unique art prints, merchandise, and creative products from Project Endeous." />
        <meta property="og:url" content="https://projectendeous.com/store" />
        <meta property="og:type" content="website" />
      </Helmet>
      <NavigationBar />
      {isLoading ? (
        <div className="splash-screen" role="status" aria-label="Loading store">
          <div className="splash-content">
            <h2>Loading Store...</h2>
            <div className="loading-bar" aria-hidden="true">
              <div 
                className="loading-progress" 
                style={{ width: `${(imagesLoaded / totalImages) * 100}%` }}
              ></div>
            </div>
            <p>{imagesLoaded} / {totalImages} images loaded</p>
          </div>
        </div>
      ) : (
        <main className="store-container">
          {/* Store Title */}
          <h1 className="store-title">Store</h1>

          {/* Products Grid */}
          <section className="products-grid" aria-label="Products">
            {products.map((product) => (
              <article
                key={product.id}
                className="product-card"
                onClick={() => handleProductClick(product)}
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handleProductClick(product)}
                role="button"
                aria-label={`View ${product.name} - ${product.price}`}
              >
                <img
                  src={product.images[0]}
                  alt={`${product.name} - ${product.description}`}
                  className="product-image"
                  loading="lazy"
                />
                <div className="product-info">
                  <h2 className="product-name">{product.name}</h2>
                  <p className="product-price">{product.price}</p>
                </div>
              </article>
            ))}
          </section>

          {/* Product Modal */}
          <Modal
            open={modalOpen}
            onClose={handleModalClose}
            aria-labelledby="product-modal-title"
            aria-describedby="product-modal-description"
          >
            <div className="product-modal">
              {selectedProduct && (
                <>
                  <div className="modal-image-container">
                    <img
                      src={selectedProduct.images[currentImageIndex]}
                      alt={`${selectedProduct.name} - Image ${currentImageIndex + 1} of ${selectedProduct.images.length}`}
                      className="modal-image"
                    />
                    <IconButton
                      className="modal-nav-button prev"
                      onClick={handlePrevImage}
                      aria-label="Previous image"
                    >
                      <ChevronLeft />
                    </IconButton>
                    <IconButton
                      className="modal-nav-button next"
                      onClick={handleNextImage}
                      aria-label="Next image"
                    >
                      <ChevronRight />
                    </IconButton>
                  </div>
                  <div className="modal-product-info">
                    <h2 id="product-modal-title" className="modal-product-name">{selectedProduct.name}</h2>
                    <p className="modal-product-price">{selectedProduct.price}</p>
                    <p id="product-modal-description" className="modal-product-description">
                      {selectedProduct.description}
                    </p>
                  </div>
                </>
              )}
            </div>
          </Modal>
        </main>
      )}
      <Footer />
    </>
  );
}

export default Store;

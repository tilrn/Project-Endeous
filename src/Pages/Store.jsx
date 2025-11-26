import React, { useState, useEffect } from 'react';
import NavigationBar from '../Components/NavigationBar';
import Slider from 'react-slick';
import { Modal, IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Store.css';

// Sample data for new items carousel
const newItems = [
  { id: 1, image: '/img/lorem-4961251_1280.jpg', name: 'New Product 1' },
  { id: 2, image: '/img/lorem-4920219_1280.jpg', name: 'New Product 2' },
  { id: 3, image: '/img/lorem-4995945_1280.jpg', name: 'New Product 3' },
  { id: 4, image: '/img/lorem-4951629_1280.jpg', name: 'New Product 4' },
  { id: 5, image: '/img/lorem-4961138_1280.jpg', name: 'New Product 5' },
  { id: 6, image: '/img/lorem-4992299_1280.jpg', name: 'New Product 6' },
  { id: 7, image: '/img/lorem-4920209_1280.jpg', name: 'New Product 7' },
  { id: 8, image: '/img/lorem-4977985_1280.jpg', name: 'New Product 8' },
  { id: 9, image: '/img/lorem-4873425_1280.jpg', name: 'New Product 9' },
  { id: 10, image: '/img/lorem-5006124_1280.jpg', name: 'New Product 10' },
];

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

const storeItems = [
  {
    id: 1,
    name: "Product 1",
    price: "$19.99",
    image: "https://picsum.photos/300/300?random=1",
    description: "Description for Product 1"
  },
  {
    id: 2,
    name: "Product 2",
    price: "$29.99",
    image: "https://picsum.photos/300/300?random=2",
    description: "Description for Product 2"
  },
  {
    id: 3,
    name: "Product 3",
    price: "$39.99",
    image: "https://picsum.photos/300/300?random=3",
    description: "Description for Product 3"
  },
  {
    id: 4,
    name: "Product 4",
    price: "$24.99",
    image: "https://picsum.photos/300/300?random=4",
    description: "Description for Product 4"
  },
  {
    id: 5,
    name: "Product 5",
    price: "$34.99",
    image: "https://picsum.photos/300/300?random=5",
    description: "Description for Product 5"
  },
  {
    id: 6,
    name: "Product 6",
    price: "$44.99",
    image: "https://picsum.photos/300/300?random=6",
    description: "Description for Product 6"
  },
  {
    id: 7,
    name: "Product 7",
    price: "$49.99",
    image: "https://picsum.photos/300/300?random=7",
    description: "Description for Product 7"
  },
  {
    id: 8,
    name: "Product 8",
    price: "$54.99",
    image: "https://picsum.photos/300/300?random=8",
    description: "Description for Product 8"
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
    const newItemsImages = newItems.length;
    const productsImages = products.reduce((total, product) => total + product.images.length, 0);
    const total = newItemsImages + productsImages;
    setTotalImages(total);
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
      // Preload new items images
      newItems.forEach(item => {
        const img = new Image();
        img.onload = handleImageLoad;
        img.onerror = handleImageError;
        img.src = item.image;
      });

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

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

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
      <NavigationBar />
      {isLoading ? (
        <div className="splash-screen">
          <div className="splash-content">
            <h2>Loading Store...</h2>
            <div className="loading-bar">
              <div 
                className="loading-progress" 
                style={{ width: `${(imagesLoaded / totalImages) * 100}%` }}
              ></div>
            </div>
            <p>{imagesLoaded} / {totalImages} images loaded</p>
          </div>
        </div>
      ) : (
        <div className="store-container">
          {/* New Items Carousel */}
          <div className="new-items-carousel">
            <h2 className="carousel-title">New Arrivals</h2>
            <Slider {...carouselSettings}>
              {newItems.map((item) => (
                <div key={item.id}>
                  <img src={item.image} alt={item.name} />
                </div>
              ))}
            </Slider>
          </div>

          {/* Store Title */}
          <h2 className="store-title">Store</h2>

          {/* Products Grid */}
          <div className="products-grid">
            {products.map((product) => (
              <div
                key={product.id}
                className="product-card"
                onClick={() => handleProductClick(product)}
              >
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="product-image"
                />
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-price">{product.price}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Product Modal */}
          <Modal
            open={modalOpen}
            onClose={handleModalClose}
            aria-labelledby="product-modal"
          >
            <div className="product-modal">
              {selectedProduct && (
                <>
                  <div className="modal-image-container">
                    <img
                      src={selectedProduct.images[currentImageIndex]}
                      alt={selectedProduct.name}
                      className="modal-image"
                    />
                    <IconButton
                      className="modal-nav-button prev"
                      onClick={handlePrevImage}
                    >
                      <ChevronLeft />
                    </IconButton>
                    <IconButton
                      className="modal-nav-button next"
                      onClick={handleNextImage}
                    >
                      <ChevronRight />
                    </IconButton>
                  </div>
                  <div className="modal-product-info">
                    <h2 className="modal-product-name">{selectedProduct.name}</h2>
                    <p className="modal-product-price">{selectedProduct.price}</p>
                    <p className="modal-product-description">
                      {selectedProduct.description}
                    </p>
                  </div>
                </>
              )}
            </div>
          </Modal>
        </div>
      )}
    </>
  );
}

export default Store;
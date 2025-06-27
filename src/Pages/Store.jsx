import React, { useState } from 'react';
import NavigationBar from '../Components/NavigationBar';
import Slider from 'react-slick';
import { Modal, IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Store.css';

// Sample data for new items carousel
const newItems = [
  { id: 1, image: 'https://picsum.photos/800/600?random=1', name: 'New Product 1' },
  { id: 2, image: 'https://picsum.photos/800/600?random=2', name: 'New Product 2' },
  { id: 3, image: 'https://picsum.photos/800/600?random=3', name: 'New Product 3' },
  { id: 4, image: 'https://picsum.photos/800/600?random=4', name: 'New Product 4' },
  { id: 5, image: 'https://picsum.photos/800/600?random=5', name: 'New Product 5' },
  { id: 6, image: 'https://picsum.photos/800/600?random=6', name: 'New Product 6' },
  { id: 7, image: 'https://picsum.photos/800/600?random=7', name: 'New Product 7' },
  { id: 8, image: 'https://picsum.photos/800/600?random=8', name: 'New Product 8' },
  { id: 9, image: 'https://picsum.photos/800/600?random=9', name: 'New Product 9' },
  { id: 10, image: 'https://picsum.photos/800/600?random=10', name: 'New Product 10' },
];

// Sample data for products
const products = [
  {
    id: 1,
    name: 'Premium Headphones',
    price: '$199.99',
    images: [
      'https://picsum.photos/800/600?random=11',
      'https://picsum.photos/800/600?random=12',
      'https://picsum.photos/800/600?random=13',
    ],
    description: 'High-quality wireless headphones with noise cancellation.',
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: '$149.99',
    images: [
      'https://picsum.photos/800/600?random=14',
      'https://picsum.photos/800/600?random=15',
      'https://picsum.photos/800/600?random=16',
    ],
    description: 'Feature-rich smartwatch with health monitoring.',
  },
  {
    id: 3,
    name: 'Wireless Speaker',
    price: '$89.99',
    images: [
      'https://picsum.photos/800/600?random=17',
      'https://picsum.photos/800/600?random=18',
      'https://picsum.photos/800/600?random=19',
    ],
    description: 'Portable Bluetooth speaker with amazing sound quality.',
  },
  {
    id: 4,
    name: 'Gaming Mouse',
    price: '$59.99',
    images: [
      'https://picsum.photos/800/600?random=20',
      'https://picsum.photos/800/600?random=21',
      'https://picsum.photos/800/600?random=22',
    ],
    description: 'High-precision gaming mouse with RGB lighting.',
  },
  {
    id: 5,
    name: 'Mechanical Keyboard',
    price: '$129.99',
    images: [
      'https://picsum.photos/800/600?random=23',
      'https://picsum.photos/800/600?random=24',
      'https://picsum.photos/800/600?random=25',
    ],
    description: 'Premium mechanical keyboard with customizable switches.',
  },
  {
    id: 6,
    name: 'USB Microphone',
    price: '$79.99',
    images: [
      'https://picsum.photos/800/600?random=26',
      'https://picsum.photos/800/600?random=27',
      'https://picsum.photos/800/600?random=28',
    ],
    description: 'Professional USB microphone for streaming and recording.',
  }
];

function Store() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

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
    </>
  );
}

export default Store;
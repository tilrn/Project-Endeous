import React from 'react';
import { Helmet } from 'react-helmet-async';
import NavigationBar from '../Components/NavigationBar';
import Footer from '../Components/Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Modal } from '@mui/material';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Gallery.css';

// Sample images for carousel - replace with your actual images
const creationImages = [
  { id: 1, url: '/img/lorem-4961251_1280.jpg', name: 'Creation 1' },
  { id: 2, url: '/img/lorem-4920219_1280.jpg', name: 'Creation 2' },
  { id: 3, url: '/img/lorem-4995945_1280.jpg', name: 'Creation 3' },
  { id: 4, url: '/img/lorem-4951629_1280.jpg', name: 'Creation 4' },
  { id: 5, url: '/img/lorem-4961138_1280.jpg', name: 'Creation 5' },
  { id: 6, url: '/img/lorem-4992299_1280.jpg', name: 'Creation 6' },
  { id: 7, url: '/img/lorem-4920209_1280.jpg', name: 'Creation 7' },
  { id: 8, url: '/img/lorem-4977985_1280.jpg', name: 'Creation 8' },
  { id: 9, url: '/img/lorem-4873425_1280.jpg', name: 'Creation 9' },
  { id: 10, url: '/img/lorem-5006124_1280.jpg', name: 'Creation 10' },
];

// Artworks grid data - replace with your actual artworks
const artworks = [
  { id: 1, url: '/img/lorem-4961251_1280.jpg', name: 'Sunset Dreams', technique: 'Oil on Canvas' },
  { id: 2, url: '/img/lorem-4920219_1280.jpg', name: 'Ocean Whispers', technique: 'Watercolor' },
  { id: 3, url: '/img/lorem-4995945_1280.jpg', name: 'Forest Light', technique: 'Acrylic' },
  { id: 4, url: '/img/lorem-4951629_1280.jpg', name: 'Urban Shadows', technique: 'Digital Art' },
  { id: 5, url: '/img/lorem-4961138_1280.jpg', name: 'Morning Mist', technique: 'Mixed Media' },
  { id: 6, url: '/img/lorem-4992299_1280.jpg', name: 'Golden Hour', technique: 'Photography' },
];

function Gallery() {
  const [selectedImage, setSelectedImage] = React.useState(null);

  return (
    <>
      <Helmet>
        <title>Creations Gallery | Project Endeous Art Portfolio</title>
        <meta name="description" content="Explore the creative gallery of Project Endeous. Browse original artworks including oil paintings, watercolors, digital art, and mixed media pieces. Each creation tells a unique story." />
        <meta name="keywords" content="art gallery, creations, artwork, paintings, digital art, watercolor, oil painting, mixed media, Project Endeous gallery" />
        <link rel="canonical" href="https://projectendeous.com/gallery" />
        <meta property="og:title" content="Creations Gallery | Project Endeous Art Portfolio" />
        <meta property="og:description" content="Explore the creative gallery of Project Endeous. Browse original artworks including oil paintings, watercolors, digital art, and mixed media pieces." />
        <meta property="og:url" content="https://projectendeous.com/gallery" />
        <meta property="og:type" content="website" />
      </Helmet>
      <NavigationBar />
      <main className="gallery-page-wrapper">
        <div className="gallery-background" aria-hidden="true">
          <img 
            src="/img/Background Creations.png" 
            alt="" 
            className="gallery-bg-image"
          />
        </div>
        <div className="gallery-page-container">
          <div className="gallery-header">
            <h1>Creations</h1>
            <p>Explore my creative works</p>
          </div>

          <section className="creations-carousel-container" aria-label="Featured creations carousel">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            speed={500}
            className="creations-swiper"
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
              1536: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
          >
            {creationImages.map((image) => (
              <SwiperSlide key={image.id} className="creation-slide">
                <div className="creation-slide-wrapper" onClick={() => setSelectedImage(image.url)}>
                  <img
                    src={image.url}
                    alt={`${image.name} - Original artwork by Project Endeous`}
                    className="creation-image"
                    loading="lazy"
                  />
                  <div className="creation-overlay">
                    <span className="creation-name">{image.name}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

          {/* Artworks Grid Section */}
          <section className="artworks-section" aria-label="Artwork gallery">
            <h2 className="artworks-title">Artwork Gallery</h2>
            <div className="artworks-grid">
              {artworks.map((artwork) => (
                <article key={artwork.id} className="artwork-card" onClick={() => setSelectedImage(artwork.url)}>
                  <div className="artwork-image-container">
                    <img 
                      src={artwork.url} 
                      alt={`${artwork.name} - ${artwork.technique} artwork by Project Endeous`}
                      className="artwork-image"
                      loading="lazy"
                    />
                  </div>
                  <div className="artwork-info">
                    <p className="artwork-name"><span>Name:</span> {artwork.name}</p>
                    <p className="artwork-technique"><span>Technique:</span> {artwork.technique}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Modal
        open={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        className="image-modal"
        aria-label="Enlarged artwork view"
      >
        <div className="modal-content" onClick={() => setSelectedImage(null)}>
          <img
            src={selectedImage}
            alt="Enlarged artwork view"
          />
        </div>
      </Modal>

      <Footer />
    </>
  );
}

export default Gallery;

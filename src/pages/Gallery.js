import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

const Gallery = () => {
  const galleryImages = [
    { id: 1, src: "/assets/images/gallery/gallery-1.jpg", alt: "Gallery Image 1" },
    { id: 2, src: "/assets/images/gallery/gallery-2.jpg", alt: "Gallery Image 2" },
    { id: 3, src: "/assets/images/gallery/gallery-3.jpg", alt: "Gallery Image 3" },
    { id: 4, src: "/assets/images/gallery/gallery-4.jpg", alt: "Gallery Image 4" },
    { id: 5, src: "/assets/images/gallery/gallery-5.jpg", alt: "Gallery Image 5" },
    { id: 6, src: "/assets/images/gallery/gallery-6.jpg", alt: "Gallery Image 6" },
    { id: 7, src: "/assets/images/gallery/gallery-7.jpg", alt: "Gallery Image 7" },
    { id: 8, src: "/assets/images/gallery/gallery-8.jpg", alt: "Gallery Image 8" },
    { id: 9, src: "/assets/images/gallery/gallery-9.jpg", alt: "Gallery Image 9" },
    { id: 10, src: "/assets/images/gallery/gallery-10.jpg", alt: "Gallery Image 10" },
    { id: 11, src: "/assets/images/gallery/gallery-11.jpg", alt: "Gallery Image 11" },
    { id: 12, src: "/assets/images/gallery/gallery-12.jpg", alt: "Gallery Image 12" }
  ];

  return (
    <div>
      <Loader />
      <Header />
      
      {/* Page Banner */}
      <section className="page-banner">
        <div 
          className="page-bg-wrapper p-r z-1 bg_cover pt-100 pb-110" 
          style={{ backgroundImage: "url(/assets/images/bg/gallery-bg.jpg)" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {/* Page Banner Content */}
                <div className="page-banner-content text-center">
                  <h1 className="page-title">Our Gallery</h1>
                  <ul className="breadcrumb-link">
                    <li><Link to="/">Home</Link></li>
                    <li className="active">Gallery</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* Section Title */}
              <div className="section-title text-center mb-55 wow fadeInDown">
                <span className="sub-title">
                  <i className="flaticon-food-tray"></i>Our Gallery
                </span>
                <h2>Food Gallery</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {galleryImages.map((image) => (
              <div key={image.id} className="col-lg-4 col-md-6 col-sm-12">
                {/* Gallery Item */}
                <div className="gallery-item style-one mb-30 wow fadeInUp">
                  <div className="gallery-img">
                    <img src={image.src} alt={image.alt} />
                    <div className="hover-content">
                      <div className="insta-icon">
                        <a href={image.src} className="image-popup">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery; 
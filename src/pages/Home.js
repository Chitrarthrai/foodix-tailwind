import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

const Home = () => {
  return (
    <div className="home-one">
      <Loader />
      <Header />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-wrapper-four">
          <div 
            className="hero-bg bg_cover" 
            style={{ backgroundImage: "url(/assets/images/hero/hero-four_bg.png)" }}
          ></div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 order-2 order-xl-1">
                {/* Hero Content */}
                <div className="hero-content">
                  <span className="tag-line wow fadeInDown" data-wow-delay=".5s">
                    Hot for every Sunday
                  </span>
                  <h1 className="wow fadeInUp" data-wow-delay=".6s">
                    Enjoy our <span>delicius</span> food
                  </h1>
                  <p className="wow fadeInDown" data-wow-delay=".7s">
                    Savor the taste of our delicious, expertly crafted dishes made with the finest ingredients, offering a perfect blend of flavors.
                  </p>
                  <div className="hero-button wow fadeInUp" data-wow-delay=".75s">
                    <Link to="/menu" className="theme-btn style-one">
                      Order Now
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 order-1 order-xl-2">
                {/* Hero Image */}
                <div className="hero-image text-center text-xl-end">
                  <div className="shape wow bounceInUp">
                    <span>
                      <img src="/assets/images/hero/text-03.png" alt="20% OFF" />
                    </span>
                  </div>
                  <img 
                    className="hero-img wow fadeInRight" 
                    data-wow-delay=".9s" 
                    src="/assets/images/hero/hero-four_img1.png" 
                    alt="Hero Image" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Section */}
      <section className="category-section pt-130">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              {/* Section Title */}
              <div className="section-title mb-50 wow fadeInUp">
                <h2>our Categories</h2>
              </div>
            </div>
            <div className="col-md-6">
              {/* Category Button */}
              <div className="category-button float-md-end mb-50 wow fadeInDown">
                <Link to="/menu" className="theme-btn style-two">
                  See More
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-md-6 col-sm-12">
              {/* Category Item */}
              <Link to="/menu" className="iconic-box style-four mb-40 wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-burger"></i>
                </div>
                <div className="content">
                  <h4 className="title">Delish Burger</h4>
                  <span>25 items</span>
                </div>
              </Link>
            </div>
            <div className="col-xl-3 col-md-6 col-sm-12">
              {/* Category Item */}
              <Link to="/menu" className="iconic-box style-four mb-40 wow fadeInDown">
                <div className="icon">
                  <i className="flaticon-sandwich-1"></i>
                </div>
                <div className="content">
                  <h4 className="title">Sandwiches</h4>
                  <span>20 items</span>
                </div>
              </Link>
            </div>
            <div className="col-xl-3 col-md-6 col-sm-12">
              {/* Category Item */}
              <Link to="/menu" className="iconic-box style-four mb-40 wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-shrimp"></i>
                </div>
                <div className="content">
                  <h4 className="title">Mexican Cuisine</h4>
                  <span>30 items</span>
                </div>
              </Link>
            </div>
            <div className="col-xl-3 col-md-6 col-sm-12">
              {/* Category Item */}
              <Link to="/menu" className="iconic-box style-four mb-40 wow fadeInDown">
                <div className="icon">
                  <i className="flaticon-pasta"></i>
                </div>
                <div className="content">
                  <h4 className="title">Italian Cuisine</h4>
                  <span>19 items</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section pt-90 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              {/* About Image Box */}
              <div className="about-image-box mb-50 text-center text-xl-start wow fadeInLeft">
                <img src="/assets/images/about/about-6.png" alt="About Image" />
              </div>
            </div>
            <div className="col-xl-6">
              {/* Section Content Box */}
              <div className="section-content-box mb-50">
                {/* Section Title */}
                <div className="section-title wow fadeInDown">
                  <span className="sub-title">
                    <i className="flaticon-food-tray"></i> About us
                  </span>
                  <h2>Delicia's about fresh flavorful dining</h2>
                </div>
                <p className="wow fadeInUp">
                  We are passionate about serving fresh, flavorful dishes crafted with the finest ingredients. Every meal is thoughtfully prepared to deliver a memorable dining experience you'll love.
                </p>
                <div className="row">
                  <div className="col-sm-6">
                    {/* Iconic Box */}
                    <div className="iconic-box style-five mb-30 wow fadeInDown">
                      <div className="icon">
                        <img src="/assets/images/icon/icon-7.svg" alt="Icon" />
                      </div>
                      <div className="content">
                        <h3 className="title">1500+</h3>
                        <p>Total Food Item</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    {/* Iconic Box */}
                    <div className="iconic-box style-five mb-30 wow fadeInDown">
                      <div className="icon">
                        <img src="/assets/images/icon/icon-8.svg" alt="Icon" />
                      </div>
                      <div className="content">
                        <h3 className="title">500+</h3>
                        <p>Branch office</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="about-button wow fadeInUp">
                  <Link to="/about" className="theme-btn style-one">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="offer-combo-section">
        <div 
          className="offer-bg-wrapper bg_cover p-r z-1 pt-130 pb-80" 
          style={{ backgroundImage: "url(/assets/images/bg/offer-bg1.jpg)" }}
        >
          <div className="shape shape-one">
            <span>
              <img src="/assets/images/bg/bn-img-6.png" alt="" />
            </span>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                {/* Section Content Box */}
                <div className="section-content-box text-center text-lg-start mb-50 wow fadeInLeft">
                  <div className="section-title text-white mb-30">
                    <span className="sub-title">
                      <i className="flaticon-food-tray"></i> Get 25% Discount
                    </span>
                    <h2>Today our special Combo offers </h2>
                  </div>
                  <div className="offer-countdown">
                    <div className="simply-countdown"></div>
                  </div>
                  <Link to="/menu" className="theme-btn style-one">
                    Read More
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                {/* Offer Image Box */}
                <div className="offer-image-box text-center text-lg-end mb-50 wow fadeInRight">
                  <img src="/assets/images/bg/offer-img1.png" alt="Combo Package image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="why-choose-section pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* Section Title */}
              <div className="section-title text-center mb-55 wow fadeInDown">
                <span className="sub-title">
                  <i className="flaticon-food-tray"></i>Why choose us
                </span>
                <h2>Why We're Your Best Choice</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-md-6 col-sm-12">
              {/* Iconic Box */}
              <div className="iconic-box style-six mb-40 wow fadeInDown">
                <div className="icon">
                  <i className="flaticon-healthy-food"></i>
                </div>
                <div className="content">
                  <h4 className="title">Hygienic Food</h4>
                  <p>We are passionate about serving fresh, flavorful</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-sm-12">
              {/* Iconic Box */}
              <div className="iconic-box style-six mb-40 wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-clean-water"></i>
                </div>
                <div className="content">
                  <h4 className="title">Fresh Environment</h4>
                  <p>We are passionate about serving fresh, flavorful</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-sm-12">
              {/* Iconic Box */}
              <div className="iconic-box style-six mb-40 wow fadeInDown">
                <div className="icon">
                  <i className="flaticon-delivery-truck"></i>
                </div>
                <div className="content">
                  <h4 className="title">Fast Delivery</h4>
                  <p>We are passionate about serving fresh, flavorful</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-sm-12">
              {/* Iconic Box */}
              <div className="iconic-box style-six mb-40 wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-chef"></i>
                </div>
                <div className="content">
                  <h4 className="title">Expert Chef</h4>
                  <p>We are passionate about serving fresh, flavorful</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section pt-130 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* Section Title */}
              <div className="section-title text-center mb-55 wow fadeInDown">
                <span className="sub-title">
                  <i className="flaticon-food-tray"></i>Testimonials
                </span>
                <h2>What Our Customers Say</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/* Testimonial Item */}
              <div className="testimonial-item style-three mb-40 wow fadeInUp">
                <div className="testimonial-content">
                  <div className="ratings mb-20">
                    <ul>
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="fas fa-star"></i></li>
                    </ul>
                  </div>
                  <p>
                    "Amazing food and excellent service! The flavors are incredible and the atmosphere is perfect for a family dinner."
                  </p>
                  <div className="author-thumb-item">
                    <div className="author-thumb">
                      <img src="/assets/images/testimonial/author-1.jpg" alt="author image" />
                    </div>
                    <div className="author-info">
                      <h5>Sarah Johnson</h5>
                      <span>Regular Customer</span>
                    </div>
                  </div>
                  <div className="quote">
                    <i className="far fa-quote-right"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/* Testimonial Item */}
              <div className="testimonial-item style-three mb-40 wow fadeInUp">
                <div className="testimonial-content">
                  <div className="ratings mb-20">
                    <ul>
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="fas fa-star"></i></li>
                    </ul>
                  </div>
                  <p>
                    "The best restaurant in town! Fresh ingredients, great taste, and friendly staff. Highly recommended!"
                  </p>
                  <div className="author-thumb-item">
                    <div className="author-thumb">
                      <img src="/assets/images/testimonial/author-2.jpg" alt="author image" />
                    </div>
                    <div className="author-info">
                      <h5>Michael Brown</h5>
                      <span>Food Blogger</span>
                    </div>
                  </div>
                  <div className="quote">
                    <i className="far fa-quote-right"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/* Testimonial Item */}
              <div className="testimonial-item style-three mb-40 wow fadeInUp">
                <div className="testimonial-content">
                  <div className="ratings mb-20">
                    <ul>
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="fas fa-star"></i></li>
                    </ul>
                  </div>
                  <p>
                    "Outstanding quality and taste! Every dish is prepared with care and the presentation is beautiful."
                  </p>
                  <div className="author-thumb-item">
                    <div className="author-thumb">
                      <img src="/assets/images/testimonial/author-3.jpg" alt="author image" />
                    </div>
                    <div className="author-info">
                      <h5>David Liam</h5>
                      <span>CEO</span>
                    </div>
                  </div>
                  <div className="quote">
                    <i className="far fa-quote-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog-section pt-130 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* Section Title */}
              <div className="section-title text-center mb-55 wow fadeInDown">
                <span className="sub-title">
                  <i className="flaticon-food-tray"></i>Our Latest Blog
                </span>
                <h2>Discover Our Latest Blog Posts</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/* Blog Post Item */}
              <div className="blog-post-item style-three mb-40 wow fadeInUp">
                <div className="post-thumbnail">
                  <img src="/assets/images/blog/blog-17.jpg" alt="Post Thumbnail" />
                </div>
                <div className="post-content">
                  <div className="post-meta">
                    <span>
                      <i className="far fa-user-alt"></i>
                      <a href="#">By David</a>
                    </span>
                    <span>
                      <i className="far fa-comment"></i>
                      <a href="#">Comment (2)</a>
                    </span>
                  </div>
                  <h4 className="title">
                    <Link to="/about">
                      Crispy Stovetop Roosted Red Potatoes Foods
                    </Link>
                  </h4>
                  <p>
                    Crispy stovetop red potatoes, seasoned to perfection, golden and delicious.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/* Blog Post Item */}
              <div className="blog-post-item style-three mb-40 wow fadeInUp">
                <div className="post-thumbnail">
                  <img src="/assets/images/blog/blog-18.jpg" alt="Post Thumbnail" />
                </div>
                <div className="post-content">
                  <div className="post-meta">
                    <span>
                      <i className="far fa-user-alt"></i>
                      <a href="#">By David</a>
                    </span>
                    <span>
                      <i className="far fa-comment"></i>
                      <a href="#">Comment (2)</a>
                    </span>
                  </div>
                  <h4 className="title">
                    <Link to="/about">
                      How to make jimmy soft boiled eggs at home
                    </Link>
                  </h4>
                  <p>
                    Make Jimmy soft-boiled eggs at home with tender whites and creamy yolks.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/* Blog Post Item */}
              <div className="blog-post-item style-three mb-40 wow fadeInUp">
                <div className="post-thumbnail">
                  <img src="/assets/images/blog/blog-19.jpg" alt="Post Thumbnail" />
                </div>
                <div className="post-content">
                  <div className="post-meta">
                    <span>
                      <i className="far fa-user-alt"></i>
                      <a href="#">By David</a>
                    </span>
                    <span>
                      <i className="far fa-comment"></i>
                      <a href="#">Comment (2)</a>
                    </span>
                  </div>
                  <h4 className="title">
                    <Link to="/about">
                      Traditional soft pretzels with sweet beer cheese
                    </Link>
                  </h4>
                  <p>
                    Warm, traditional soft pretzels served with rich, sweet beer cheese dip.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back To Top */}
      <a href="#" className="back-to-top">
        <i className="far fa-angle-up"></i>
      </a>

      <Footer />
    </div>
  );
};

export default Home; 
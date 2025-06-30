import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

const About = () => {
  return (
    <div>
      <Loader />
      <Header />
      
      {/* Page Banner */}
      <section className="page-banner">
        <div 
          className="page-bg-wrapper p-r z-1 bg_cover pt-100 pb-110" 
          style={{ backgroundImage: "url(/assets/images/bg/page-bg.jpg)" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {/* Page Banner Content */}
                <div className="page-banner-content text-center">
                  <h1 className="page-title">About Us</h1>
                  <ul className="breadcrumb-link">
                    <li><Link to="/">Home</Link></li>
                    <li className="active">About Us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              {/* About Image Box */}
              <div className="about-image-box mb-50 text-center text-xl-start wow fadeInLeft">
                <img src="/assets/images/about/about-1.png" alt="About Image" />
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
                <p className="wow fadeInUp">
                  Our commitment to quality extends beyond just the food. We create an atmosphere where every visit feels special, combining exceptional cuisine with warm hospitality and a welcoming environment.
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
                  <p>We maintain the highest standards of food safety and hygiene in all our kitchens.</p>
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
                  <p>Our restaurants provide a clean, comfortable, and welcoming atmosphere for all guests.</p>
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
                  <p>Quick and reliable delivery service to bring our delicious food right to your doorstep.</p>
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
                  <p>Our experienced chefs create culinary masterpieces with passion and expertise.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* Section Title */}
              <div className="section-title text-center mb-55 wow fadeInDown">
                <span className="sub-title">
                  <i className="flaticon-food-tray"></i>Our Team
                </span>
                <h2>Meet Our Expert Chefs</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/* Team Item */}
              <div className="team-item style-one mb-40 wow fadeInUp">
                <div className="member-image">
                  <img src="/assets/images/team/team-5.jpg" alt="Team Member" />
                  <ul className="social-link">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="member-info text-center">
                  <h4 className="title">Chef Michael</h4>
                  <span className="position">Head Chef</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/* Team Item */}
              <div className="team-item style-one mb-40 wow fadeInUp">
                <div className="member-image">
                  <img src="/assets/images/team/team-6.jpg" alt="Team Member" />
                  <ul className="social-link">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="member-info text-center">
                  <h4 className="title">Chef Sarah</h4>
                  <span className="position">Sous Chef</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/* Team Item */}
              <div className="team-item style-one mb-40 wow fadeInUp">
                <div className="member-image">
                  <img src="/assets/images/team/team-7.jpg" alt="Team Member" />
                  <ul className="social-link">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="member-info text-center">
                  <h4 className="title">Chef David</h4>
                  <span className="position">Pastry Chef</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About; 
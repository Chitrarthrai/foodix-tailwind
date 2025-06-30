import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

const Contact = () => {
  return (
    <div>
      <Loader />
      <Header />
      
      {/* Page Banner */}
      <section className="page-banner">
        <div 
          className="page-bg-wrapper p-r z-1 bg_cover pt-100 pb-110" 
          style={{ backgroundImage: "url(/assets/images/bg/contact-bg1.jpg)" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {/* Page Banner Content */}
                <div className="page-banner-content text-center">
                  <h1 className="page-title">Contact Us</h1>
                  <ul className="breadcrumb-link">
                    <li><Link to="/">Home</Link></li>
                    <li className="active">Contact Us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* Section Title */}
              <div className="section-title text-center mb-55 wow fadeInDown">
                <span className="sub-title">
                  <i className="flaticon-food-tray"></i>Contact Us
                </span>
                <h2>Get In Touch With Us</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/* Contact Info Item */}
              <div className="iconic-box style-six mb-40 wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-location"></i>
                </div>
                <div className="content">
                  <h4 className="title">Our Location</h4>
                  <p>1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/* Contact Info Item */}
              <div className="iconic-box style-six mb-40 wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-phone"></i>
                </div>
                <div className="content">
                  <h4 className="title">Phone Number</h4>
                  <p><a href="tel:+88-344-667-999">+88-344-667-999</a></p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/* Contact Info Item */}
              <div className="iconic-box style-six mb-40 wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-email"></i>
                </div>
                <div className="content">
                  <h4 className="title">Email Address</h4>
                  <p><a href="mailto:order@foodix.com">order@foodix.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              {/* Contact Form */}
              <div className="contact-form-wrapper wow fadeInUp">
                <div className="section-title text-center mb-50">
                  <h3>Send Us a Message</h3>
                  <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
                </div>
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form_group">
                        <input 
                          type="text" 
                          className="form_control" 
                          placeholder="Your Name" 
                          required 
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form_group">
                        <input 
                          type="email" 
                          className="form_control" 
                          placeholder="Your Email" 
                          required 
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form_group">
                        <input 
                          type="tel" 
                          className="form_control" 
                          placeholder="Your Phone" 
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form_group">
                        <select className="form_control nice-select">
                          <option value="">Select Subject</option>
                          <option value="general">General Inquiry</option>
                          <option value="reservation">Reservation</option>
                          <option value="feedback">Feedback</option>
                          <option value="complaint">Complaint</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form_group">
                        <textarea 
                          className="form_control" 
                          rows="5" 
                          placeholder="Your Message"
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form_group text-center">
                        <button type="submit" className="theme-btn style-one">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="map-wrapper wow fadeInUp">
                <div className="map-box">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s150%20Park%20Row%2C%20New%20York%2C%20NY%2010007%2C%20USA!5e0!3m2!1sen!2sin!4v1645000000000!5m2!1sen!2sin" 
                    width="100%" 
                    height="450" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy"
                    title="Location Map"
                  ></iframe>
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

export default Contact; 
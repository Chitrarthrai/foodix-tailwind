import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return (
    <>
      {/* Cart Sidebar */}
      <div className={`sidemenu-wrapper-cart ${isCartOpen ? 'info-open' : ''}`}>
        <div className="sidemenu-content">
          <div className="widget widget-shopping-cart">
            <h4>My cart</h4>
            <div className="sidemenu-cart-close" onClick={toggleCart}>
              <i className="far fa-times"></i>
            </div>
            <div className="widget-shopping-cart-content">
              <ul className="foodix-mini-cart-list">
                <li className="foodix-menu-cart">
                  <a href="#" className="remove-cart">
                    <i className="far fa-trash-alt"></i>
                  </a>
                  <a href="#">
                    <img src="/assets/images/product/cart-1.jpg" alt="cart image" />
                    Urban Bourbon Bliss Ribeye
                  </a>
                  <span className="quantity">
                    1 × <span><span className="currency">$</span>940.00</span>
                  </span>
                </li>
                <li className="foodix-menu-cart">
                  <a href="#" className="remove-cart">
                    <i className="far fa-trash-alt"></i>
                  </a>
                  <a href="#">
                    <img src="/assets/images/product/cart-2.jpg" alt="cart image" />
                    Artisanal Truffle Tango Sirloin
                  </a>
                  <span className="quantity">
                    1 × <span><span className="currency">$</span>940.00</span>
                  </span>
                </li>
                <li className="foodix-menu-cart">
                  <a href="#" className="remove-cart">
                    <i className="far fa-trash-alt"></i>
                  </a>
                  <a href="#">
                    <img src="/assets/images/product/cart-3.jpg" alt="cart image" />
                    Smoked Paprika Perfection
                  </a>
                  <span className="quantity">
                    1 × <span><span className="currency">$</span>940.00</span>
                  </span>
                </li>
                <li className="foodix-menu-cart">
                  <a href="#" className="remove-cart">
                    <i className="far fa-trash-alt"></i>
                  </a>
                  <a href="#">
                    <img src="/assets/images/product/cart-4.jpg" alt="cart image" />
                    Tandoori Temptation Tender
                  </a>
                  <span className="quantity">
                    1 × <span><span className="currency">$</span>940.00</span>
                  </span>
                </li>
              </ul>
              <div className="cart-mini-total">
                <div className="cart-total">
                  <span><strong>Subtotal:</strong></span>{" "}
                  <span className="amount">
                    1 × <span><span className="currency">$</span>940.00</span>
                  </span>
                </div>
              </div>
              <div className="cart-button">
                <Link to="/checkout" className="theme-btn style-one">
                  Proceed to checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div className={`offcanvas__overlay ${isMenuOpen || isCartOpen ? 'overlay-open' : ''}`} onClick={() => { setIsMenuOpen(false); setIsCartOpen(false); }}></div>

      {/* Header */}
      <header className="header-area header-one navigation-white transparent-header">
        <div className="container">
          <div className="header-navigation">
            <div className="nav-overlay"></div>
            <div className="primary-menu">
              {/* Site Branding */}
              <div className="site-branding">
                <Link to="/" className="brand-logo">
                  <img src="/assets/images/logo/logo-white.png" alt="Logo" />
                </Link>
              </div>
              <div className="nav-inner-menu">
                {/* Foodix Nav Menu */}
                <div className={`foodix-nav-menu ${isMenuOpen ? 'menu-on' : ''}`}>
                  {/* Mobile Logo */}
                  <div className="mobile-logo mb-30 d-block d-xl-none text-center">
                    <Link to="/" className="brand-logo">
                      <img src="/assets/images/logo/logo-main.png" alt="Site Logo" />
                    </Link>
                  </div>
                  {/* Main Menu */}
                  <nav className={`main-menu ${isMenuOpen ? 'menu-on' : ''}`}>
                    <ul>
                      <li className="menu-item has-children">
                        <a href="#">Home</a>
                        <ul className="sub-menu">
                          <li><Link to="/">Home Restaurant</Link></li>
                          <li><Link to="/beef">Home Beef</Link></li>
                          <li><Link to="/burger">Home Burger</Link></li>
                          <li><Link to="/pizza">Home Pizza</Link></li>
                          <li><Link to="/sushi">Home Sushi</Link></li>
                        </ul>
                      </li>
                      <li className="menu-item has-children">
                        <a href="#">Menu</a>
                        <ul className="sub-menu">
                          <li><Link to="/menu-v1">Menu List One</Link></li>
                          <li><Link to="/menu-v2">Menu List Two</Link></li>
                          <li><Link to="/menu-v3">Menu Grid</Link></li>
                          <li><Link to="/menu-details">Menu Details</Link></li>
                        </ul>
                      </li>
                      <li className="menu-item has-children">
                        <a href="#">Pages</a>
                        <ul className="sub-menu">
                          <li><Link to="/about">About Us</Link></li>
                          <li><Link to="/history">Our history</Link></li>
                          <li><Link to="/chefs">Our Chefs</Link></li>
                          <li><Link to="/gallery">Our Gallery</Link></li>
                          <li><Link to="/faq">Faqs</Link></li>
                          <li><Link to="/404">Error 404</Link></li>
                        </ul>
                      </li>
                      <li className="menu-item has-children">
                        <a href="#">Shop</a>
                        <ul className="sub-menu">
                          <li><Link to="/products">Our Shop</Link></li>
                          <li><Link to="/menu-details">Product Details</Link></li>
                          <li><Link to="/cart">Cart</Link></li>
                          <li><Link to="/checkout">Checkout</Link></li>
                        </ul>
                      </li>
                      <li className="menu-item has-children">
                        <a href="#">Blog</a>
                        <ul className="sub-menu">
                          <li><Link to="/blog-grid">Blog Grid</Link></li>
                          <li><Link to="/blog-classic">Blog Standard</Link></li>
                          <li><Link to="/blog-details">Blog Details</Link></li>
                        </ul>
                      </li>
                      <li className="menu-item">
                        <Link to="/contact">Contact</Link>
                      </li>
                    </ul>
                  </nav>
                  {/* Nav Button */}
                  <div className="nav-button mt-50 d-block d-xl-none text-center">
                    <Link to="/contact" className="theme-btn style-one">
                      Book A Table
                    </Link>
                  </div>
                </div>
                {/* Nav Right Item */}
                <div className="nav-right-item">
                  <div className="nav-button d-none d-xl-block">
                    <Link to="/contact" className="theme-btn style-one">
                      Book A Table
                    </Link>
                  </div>
                  <div className="cart-button" onClick={toggleCart}>
                    <i className="far fa-shopping-cart"></i>
                  </div>
                  <div className={`navbar-toggler ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header; 
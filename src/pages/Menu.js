import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const menuItems = [
    {
      id: 1,
      category: "burger",
      name: "Classic Beef Burger",
      description: "Juicy beef patty with fresh lettuce, tomato, and special sauce",
      price: "$12.99",
      image: "/assets/images/menu/menu-1.jpg"
    },
    {
      id: 2,
      category: "pizza",
      name: "Margherita Pizza",
      description: "Fresh mozzarella, tomato sauce, and basil",
      price: "$18.99",
      image: "/assets/images/menu/menu-2.jpg"
    },
    {
      id: 3,
      category: "pasta",
      name: "Spaghetti Carbonara",
      description: "Creamy pasta with bacon, eggs, and parmesan cheese",
      price: "$15.99",
      image: "/assets/images/menu/menu-3.jpg"
    },
    {
      id: 4,
      category: "salad",
      name: "Caesar Salad",
      description: "Fresh romaine lettuce with caesar dressing and croutons",
      price: "$9.99",
      image: "/assets/images/menu/menu-4.jpg"
    },
    {
      id: 5,
      category: "dessert",
      name: "Chocolate Cake",
      description: "Rich chocolate cake with vanilla ice cream",
      price: "$8.99",
      image: "/assets/images/menu/menu-5.jpg"
    },
    {
      id: 6,
      category: "drink",
      name: "Fresh Lemonade",
      description: "Refreshing lemonade made with fresh lemons",
      price: "$4.99",
      image: "/assets/images/menu/menu-6.jpg"
    }
  ];

  const categories = [
    { id: "all", name: "All" },
    { id: "burger", name: "Burgers" },
    { id: "pizza", name: "Pizza" },
    { id: "pasta", name: "Pasta" },
    { id: "salad", name: "Salads" },
    { id: "dessert", name: "Desserts" },
    { id: "drink", name: "Drinks" }
  ];

  const filteredItems = activeCategory === "all" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

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
                  <h1 className="page-title">Our Menu</h1>
                  <ul className="breadcrumb-link">
                    <li><Link to="/">Home</Link></li>
                    <li className="active">Menu</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="menu-section pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* Section Title */}
              <div className="section-title text-center mb-55 wow fadeInDown">
                <span className="sub-title">
                  <i className="flaticon-food-tray"></i>Our Menu
                </span>
                <h2>Delicious Food Menu</h2>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="row">
            <div className="col-lg-12">
              <div className="filter-category text-center mb-50 wow fadeInUp">
                <select 
                  className="nice-select"
                  value={activeCategory}
                  onChange={(e) => setActiveCategory(e.target.value)}
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="row">
            {filteredItems.map((item) => (
              <div key={item.id} className="col-lg-6 col-md-6 col-sm-12">
                {/* Menu Item */}
                <div className="menu-item style-one mb-40 wow fadeInUp">
                  <div className="menu-thumbnail">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="menu-info">
                    <h4 className="title">{item.name}</h4>
                    <p className="description">{item.description}</p>
                    <p className="price">{item.price}</p>
                    <Link to="/contact" className="theme-btn style-two">
                      Order Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section pt-120 pb-90">
        <div 
          className="cta-wrapper bg_cover p-r z-1" 
          style={{ backgroundImage: "url(/assets/images/bg/cta_bg-1.jpg)" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="cta-content-box text-center wow fadeInUp">
                  <h2>Ready to Order?</h2>
                  <p>Experience the best flavors and quality ingredients</p>
                  <Link to="/contact" className="theme-btn style-one">
                    Book A Table
                  </Link>
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

export default Menu; 
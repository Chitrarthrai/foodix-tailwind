# Foodix - React + Tailwind CSS Restaurant Website

A modern React application converted from HTML/CSS to React components with Tailwind CSS, preserving all original styling, animations, and functionality.

## 🚀 Features

- **Complete HTML to React Conversion**: All original HTML pages converted to React components
- **Preserved Styling**: All original CSS, animations, and transitions maintained
- **Responsive Design**: Mobile-first responsive design using Bootstrap classes
- **Interactive Components**: Header with mobile menu, cart sidebar, and smooth transitions
- **Multiple Pages**: Home, About, Contact, Menu, Gallery, and more
- **JavaScript Functionality**: All original JS features including animations, sliders, and interactions
- **Asset Management**: All images, fonts, and CSS properly organized

## 📁 Project Structure

```
foodix-tailwind/
├── public/
│   ├── assets/           # All original assets (images, fonts, CSS, JS)
│   │   ├── css/         # Original CSS files
│   │   ├── fonts/       # FontAwesome and custom fonts
│   │   ├── images/      # All images and graphics
│   │   ├── js/          # Original JavaScript files
│   │   └── vendor/      # Third-party libraries
│   ├── index.html       # Main HTML with all CSS imports
│   └── favicon.ico
├── src/
│   ├── components/      # Reusable React components
│   │   ├── Header.js    # Navigation and cart sidebar
│   │   ├── Footer.js    # Footer with social links
│   │   ├── Loader.js    # Page preloader
│   │   └── ScriptLoader.js # JavaScript functionality loader
│   ├── pages/           # Page components
│   │   ├── Home.js      # Main homepage
│   │   ├── About.js     # About page
│   │   ├── Contact.js   # Contact page with form
│   │   ├── Menu.js      # Menu page with filtering
│   │   └── Gallery.js   # Image gallery
│   ├── App.js           # Main app with routing
│   ├── index.js         # App entry point
│   └── index.css        # Tailwind CSS imports
├── tailwind.config.js   # Tailwind configuration
└── package.json         # Dependencies and scripts
```

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks and functional components
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Bootstrap** - Original responsive grid system (preserved)
- **jQuery** - Original JavaScript functionality (loaded dynamically)
- **FontAwesome** - Icon library
- **Slick Slider** - Carousel functionality
- **Magnific Popup** - Lightbox for images
- **WOW.js** - Scroll animations
- **Nice Select** - Custom select dropdowns

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd foodix-tailwind
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

## 📄 Available Pages

- **Home** (`/`) - Main landing page with hero, categories, about, offers, testimonials, and blog sections
- **About** (`/about`) - Company information, team, and why choose us
- **Contact** (`/contact`) - Contact form, location info, and map
- **Menu** (`/menu`) - Food menu with category filtering
- **Gallery** (`/gallery`) - Image gallery with lightbox
- **Additional Routes** - All original HTML pages mapped to React components

## 🎨 Styling Approach

### CSS Organization
- **Original CSS Preserved**: All original `style.css` and `default.css` files are loaded
- **Tailwind Integration**: Tailwind utilities available for custom styling
- **Responsive Design**: Bootstrap grid system maintained for consistency
- **Animations**: All original CSS animations and transitions preserved

### Component Styling
- **CSS Classes**: Original CSS classes used throughout components
- **Inline Styles**: Background images and dynamic styles applied inline
- **Responsive**: Mobile-first approach with Bootstrap breakpoints

## 🔧 Customization

### Adding New Pages
1. Create a new component in `src/pages/`
2. Import Header, Footer, and Loader components
3. Add the route in `src/App.js`
4. Follow the existing page structure pattern

### Modifying Styles
- **Original CSS**: Edit files in `public/assets/css/`
- **Tailwind**: Use Tailwind utilities in components
- **Custom CSS**: Add to `src/index.css`

### JavaScript Functionality
- **Original JS**: All original functionality loaded via ScriptLoader
- **React Hooks**: Use React hooks for component state
- **Event Handling**: Combine React events with jQuery functionality

## 📱 Responsive Design

The website is fully responsive with:
- **Mobile-first approach**
- **Bootstrap grid system**
- **Flexible images and layouts**
- **Touch-friendly navigation**
- **Optimized for all screen sizes**

## 🎯 Key Features Implemented

### Header Component
- **Responsive navigation** with mobile menu
- **Cart sidebar** with product list
- **Logo and branding**
- **Search functionality**
- **Smooth animations**

### Home Page
- **Hero section** with call-to-action
- **Category showcase** with icons
- **About section** with statistics
- **Special offers** with countdown
- **Testimonials** carousel
- **Blog posts** grid

### Interactive Elements
- **Mobile menu toggle**
- **Cart sidebar toggle**
- **Image lightbox** for gallery
- **Form validation**
- **Smooth scrolling**
- **Loading animations**

## 🔍 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📝 License

This project is for educational and demonstration purposes. The original design and assets belong to their respective owners.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or support, please open an issue in the repository.

---

**Note**: This is a complete conversion of an HTML/CSS website to React, preserving all original functionality, styling, and user experience while modernizing the codebase with React best practices.

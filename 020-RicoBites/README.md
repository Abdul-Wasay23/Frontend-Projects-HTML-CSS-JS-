# RicoBites

This project is a dynamic food truck and restaurant portfolio website **RicoBites**, designed to showcase a "Flavors on Wheels" experience with a vibrant menu and engaging user interface.

## Overview

- **Brand Name:** "RicoBites"
- **Service Highlights:**
  - **Gourmet Mobile Cuisine** – Fresh, bold flavors delivered on wheels.
  - **Artisan Appetizers** – Curated starters like our signature cheese sandwiches.
  - **Hearty Soups & Stews** – Warm, comforting bowls perfect for any season.
  - **Diverse Menu Selections** – Featuring Chicken, Pork, Lasagna, and Chimichangas.
  - **Interactive Location Tracking** – "Where Flavor Meets the Road".

## Project Structure

- `index.html`: The main landing page featuring a captivating banner, "Explore Our Selection" grid, "Our Story" section, and a full menu showcase.
- `layout/`: Contains reusable HTML components (`header.html` and `footer.html`) for consistent site-wide navigation and footer content.
- `css/`: Custom styling architecture:
  - `custom.css`: Core design system, typography (Jersey, Poppins), and theme colors.
  - `bootstrap.css`: Responsive grid framework.
  - `animate.css`: Library for element entrance animations.
  - `responsive.css`: Media queries ensuring compatibility across all device sizes.
  - `slick-theme.css` & `slicknav.css`: Styles for the rich media sliders and mobile navigation.
  - `fancybox.css`: Lightbox styling for image interaction.
- `js/`: Interactive logic layer:
  - `custom.js`: Main script for initializing sliders (Slick), animations (WOW.js), and loading layout fragments.
  - `wow.js`: Handles scroll-based reveal animations.
  - `fancybox.js`: Manages modal image views.
  - `bootstrap.js`: Bootstrap component logic.
  - `jquery-3.6.0.min.js`: Core library for DOM manipulation.
- `slick/`: Resources for the responsive carousels used in the testimonial and menu sections.
- `images/`: Directory containing project assets, including banner graphics, food photography, and UI icons.

## Technologies Used

- **HTML5/CSS3:** Semantic markup with modern styling techniques including flexbox and custom animations.
- **Bootstrap:** Mobile-first responsive grid system for layout structure.
- **jQuery:** Simplifies DOM traversal and event handling.
- **Slick Carousel:** Implements responsive and touch-friendly content sliders.
- **WOW.js & Animate.css:** Orchestrates smooth scroll-triggered animations for a dynamic user experience.
- **Fancybox:** Provides an elegant lightbox interface for viewing gallery images.
- **FontAwesome:** Scalable vector icons for UI elements and social media links.

## Installation & Setup

1. Clone the repository to your local machine.
2. Open `index.html` in any modern web browser.
   - *Note:* Because this project uses `jquery.load()` to include the header and footer, you may need to run it on a local server (e.g., Live Server in VS Code) to view the full layout correctly, as strict browser CORS policies might block local file includes.
3. No complex build step is required.

---

## Contact

- 📞 Phone: +1 (555) 000-0000
- ✉️ Email: contact@example.com

© 2024 RicoBites. All rights reserved.

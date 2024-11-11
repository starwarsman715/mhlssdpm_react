# MHLSSDPM Photography Portfolio

A React-based photography portfolio website showcasing collections of photographs from different locations. The site features smooth animations, lightbox image viewing, and responsive design.

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx        # Main navigation component
│   │   ├── Footer.jsx        # Footer component
│   │   ├── Navbar.module.css
│   │   └── Footer.module.css
│   ├── home/
│   │   ├── HeroSection.jsx   # Homepage hero section
│   │   ├── Collections.jsx   # Collections grid with parallax
│   │   ├── HeroSection.module.css
│   │   └── Collections.module.css
│   └── gallery/
│       ├── Lightbox.jsx      # Image lightbox component
│       └── Lightbox.module.css
├── pages/
│   ├── About.jsx            # About page
│   ├── Gear.jsx            # Photography gear info
│   ├── Contact.jsx         # Contact information
│   └── galleries/
│       ├── Boston.jsx      # Boston photo gallery
│       ├── Madrid.jsx      # Madrid photo gallery
│       ├── Montmelo.jsx    # Montmelo photo gallery
│       └── Other.jsx       # Miscellaneous photos
└── styles/
    └── globals.css         # Global styles and typography
```

## Key Components

### Layout Components

#### Navbar (`components/layout/Navbar.jsx`)
- Responsive navigation bar
- Dynamic color scheme based on current page
- Smooth scroll to collections on homepage
- Logo switches between light/dark versions

#### Footer (`components/layout/Footer.jsx`)
- Copyright information
- Social media links
- Scroll-to-top functionality
- Consistent styling across pages

### Home Page Components

#### HeroSection (`components/home/HeroSection.jsx`)
- Full-screen hero image
- Fade-in text animation
- Custom typography and styling
- Background image with gradient overlay

#### Collections (`components/home/Collections.jsx`)
- Grid of collection previews
- Parallax scrolling effect
- Custom speed factors for landscape/portrait images
- Smooth transitions between sections

### Gallery Components

#### Lightbox (`components/gallery/Lightbox.jsx`)
- Full-screen image viewer
- Previous/Next navigation
- Click outside to close
- Keyboard navigation support
- Smooth transitions

#### Gallery Pages (`pages/galleries/`)
Each gallery page features:
- Responsive image grid
- Fade-in animations on scroll
- Quote section
- Lightbox integration
- Column-based layout

## Features

### Animations
- Scroll-triggered fade-ins
- Parallax effects
- Smooth transitions
- Image lazy loading
- Gallery image fade-in effects

### Navigation
- Responsive navbar
- Dynamic routing
- Smooth scrolling
- Collection quick links

### Image Handling
- Lightbox viewing
- Responsive images
- Lazy loading
- Optimized loading

## Styling

### CSS Modules
- Component-scoped styling
- Shared global styles
- Responsive design
- CSS animations

### Typography
- Playfair Display for headings
- Nunito for body text
- Consistent spacing
- Responsive font sizes

### Colors
- Light theme: #FFFEEB background
- Dark text: #1B1B1B
- Accent colors
- Gradient overlays

## Pages

### Home Page
- Hero section with background image
- Collections grid with parallax
- Navigation to galleries

### About Page
- Personal information
- Background story
- Profile image
- Fade-in animations

### Gear Page
- Photography equipment details
- Camera information
- Lens specifications
- Equipment images

### Contact Page
- Contact information
- Email link
- Social media links
- Background image

### Gallery Pages
Each gallery page includes:
- Photo grid
- Location-specific quote
- Lightbox functionality
- Fade-in animations

## Technical Details

### Dependencies
- React Router for navigation
- CSS Modules for styling
- Font Awesome for icons
- Custom hooks for animations

### Performance
- Image lazy loading
- Optimized animations
- Smooth scrolling
- Responsive images

### Browser Support
- Modern browsers
- Responsive design
- Mobile-friendly
- Touch support

## Setup and Installation

1. Clone the repository
```bash
git clone [repository-url]
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

## Image Requirements

Place images in their respective directories:
```
src/assets/images/
├── Home/           # Homepage images
├── About/          # About page images
├── Contact/        # Contact page images
├── Gear/           # Equipment images
└── galleries/
    ├── Boston/     # Boston gallery images
    ├── Madrid/     # Madrid gallery images
    ├── Montmelo/   # Montmelo gallery images
    └── Other/      # Other gallery images
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License
[Include your license information here]
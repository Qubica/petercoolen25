# Peter Coolen - Landing Page

A professional landing page built with Next.js and a comprehensive SCSS design system. This project showcases Peter Coolen's expertise in headless Shopify development and includes all the content for his professional services.

## 🎨 Design System

This project features a complete modular design system built with SCSS:

### Core Features
- **CSS Variables**: Comprehensive token system for colors, typography, spacing, and more
- **Fluid Typography**: Responsive font sizes using `clamp()` for perfect scaling
- **Modular Components**: Each component has its own SCSS file for maintainability
- **Utility Classes**: Typography, color, and spacing utilities
- **Responsive Design**: Mobile-first approach with consistent breakpoints

### Design Tokens

**Colors**
```scss
--color-primary: #000000
--color-secondary: #666666
--color-background: #ffffff
--color-text-primary: #000000
// ... and more
```

**Typography Scale**
```scss
--font-size-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)
--font-size-sm: clamp(0.875rem, 0.8rem + 0.375vw, 1rem)
// ... fluid scaling for all sizes
```

**Spacing System**
```scss
--space-xs: 0.25rem
--space-sm: 0.5rem
--space-md: 1rem
// ... consistent spacing scale
```

## 🏗️ Architecture

### File Structure
```
src/
├── styles/
│   ├── design-system.scss      # Core design tokens & utilities
│   ├── main.scss              # Main stylesheet with imports
│   └── components/            # Modular component styles
│       ├── hero.scss
│       ├── section.scss
│       ├── feature-card.scss
│       ├── work-card.scss
│       ├── process-card.scss
│       ├── about.scss
│       ├── faq.scss
│       └── cta.scss
└── app/
    ├── page.tsx              # Landing page content
    ├── layout.tsx            # Root layout with metadata
    └── globals.css           # Minimal global styles
```

### Component System

Each section is built as a reusable component:

- **Hero Section**: Main headline with CTAs
- **Content Blocks**: Two-column layouts with text and features
- **Feature Cards**: Grid of service highlights
- **Work Showcase**: Portfolio items with descriptions
- **Process Cards**: Numbered steps explanation
- **About Section**: Personal introduction with image
- **FAQ Section**: Questions and answers
- **CTA Section**: Call-to-action with contrasting background
- **Testimonials**: Client feedback cards

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd peter-coolen-landing-page
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) (or the port shown in terminal)

### Build for Production

```bash
npm run build
npm run start
```

## 📱 Responsive Design

The design system includes comprehensive responsive utilities:

- **Breakpoints**: 640px, 768px, 1024px, 1280px, 1536px
- **Fluid Typography**: Scales smoothly between mobile and desktop
- **Flexible Grids**: Components adapt to different screen sizes
- **Mobile-First**: All styles start mobile and enhance upward

## 🎯 SEO & Performance

- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Meta Tags**: Complete OpenGraph and Twitter Card support
- **Performance**: Optimized CSS with critical path prioritization
- **Accessibility**: ARIA labels and semantic structure

## 🛠️ Technologies Used

- **Next.js 15**: React framework with App Router
- **SCSS/Sass**: Advanced CSS preprocessing
- **TypeScript**: Type-safe JavaScript
- **CSS Variables**: Modern custom properties
- **Fluid Typography**: Responsive design techniques

## 📖 Content Sections

The landing page includes:

1. **Hero**: Main value proposition and CTAs
2. **Problem**: What templates do to brands
3. **Solution**: Benefits of custom builds  
4. **Value Props**: Speed, agility, and custom stack
5. **Process**: How collaboration works
6. **Portfolio**: Selected client work
7. **Testimonials**: Client feedback
8. **Tech Stack**: Tools and technologies
9. **About**: Personal background
10. **CTA**: Book a call
11. **FAQ**: Common questions

## 🔧 Customization

### Adding New Components

1. Create a new SCSS file in `src/styles/components/`
2. Import it in `src/styles/main.scss`
3. Use the established design tokens and naming conventions

### Modifying Design Tokens

Update values in `src/styles/design-system.scss` to change:
- Colors and themes
- Typography scale
- Spacing system
- Border radius
- Shadows

### Example Component Structure

```scss
.component-name {
  // Base styles
  
  &__element {
    // Element styles using design tokens
    padding: var(--space-md);
    color: var(--color-text-primary);
  }
  
  &--modifier {
    // Modifier styles
  }
  
  // Responsive breakpoints
  @media (min-width: 768px) {
    // Tablet+ styles
  }
}
```

## 📄 License

This project is created for Peter Coolen's professional landing page.

---

Built with ❤️ using Next.js and a comprehensive SCSS design system.
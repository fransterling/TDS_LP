# Tax Debt Services Landing Page

A modern, responsive landing page for Tax Debt Services, built with React and TypeScript. This single-page application showcases the company's services, client testimonials, and provides a contact form interface.

## 🚀 Features

- **Responsive Design**: Fully responsive layout optimized for phone, tablet, laptop, and desktop screens
- **Interactive Image Gallery**: Clickable testimonial and Google review images with full-size modal viewer
- **Image Navigation**: Left/right arrow navigation and keyboard controls (Arrow keys, Escape) for browsing through review images
- **Smooth Scrolling**: Smooth anchor link navigation with proper scroll offset for fixed header
- **Modern UI/UX**: Clean, professional design with hover effects and transitions
- **Accessibility**: Keyboard navigation support and semantic HTML structure

## 🛠️ Tech Stack

- **React 18.3.1** - UI library
- **TypeScript** - Type safety
- **Vite 6.0.1** - Build tool and dev server
- **CSS Modules** - Scoped styling
- **Netlify** - Hosting and deployment

## 📁 Project Structure

```
TDS_LP/
├── src/
│   ├── pages/
│   │   ├── LandingPage.tsx          # Main landing page component
│   │   └── LandingPage.module.css  # Component styles
│   ├── App.tsx                      # Root app component
│   ├── main.tsx                     # Application entry point
│   └── index.css                    # Global styles
├── index.html                       # HTML template
├── vite.config.ts                   # Vite configuration
├── tsconfig.json                    # TypeScript configuration
├── netlify.toml                     # Netlify deployment config
└── package.json                     # Dependencies and scripts
```

## 🏃 Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd TDS_LP
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port shown in your terminal).

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📝 Available Scripts

- `npm run dev` - Start development server with hot module replacement
- `npm run build` - Build for production (TypeScript compilation + Vite build)
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 🎨 Key Components

### Landing Page Sections

1. **Header** - Fixed navigation with logo and CTA button
2. **Hero** - Main headline, subheadline, CTA, media badges, and trust indicator
3. **Services** - 5-step process explanation
4. **OIC Explanation** - Offer in Compromise overview
5. **Benefits** - Key benefits of the service
6. **Why Choose Us** - Company differentiators
7. **Success Stories** - Client testimonials and Google reviews with interactive gallery
8. **Eligibility** - Qualification criteria
9. **About Us** - Company background
10. **FAQ** - Expandable frequently asked questions
11. **Summary** - Quick overview section
12. **Contact Form** - Contact form placeholder (GHL iframe integration pending)
13. **Footer** - Company info and links

### Image Gallery Features

- **Testimonial Images**: Full-width images showcasing client success stories
- **Google Review Images**: Compact, clickable cards that open in a modal
- **Modal Viewer**: 
  - Full-size image display
  - Left/right arrow navigation
  - Keyboard controls (Arrow Left/Right, Escape)
  - Image counter (e.g., "1 / 6")
  - Click outside to close

## 🎯 Responsive Breakpoints

- **Mobile (≤ 480px)**: Optimized spacing, smaller buttons, single-column layouts
- **Phone (≤ 639px)**: Adjusted image heights for better mobile viewing
- **Tablet (≤ 768px)**: Two-column grids, medium-sized elements
- **Desktop (≥ 1024px)**: Three-column grids, full spacing, larger typography

## 🚢 Deployment

This project is configured for deployment on Netlify:

1. The `netlify.toml` file contains:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Security headers
   - SPA routing redirects

2. To deploy:
   - Connect your repository to Netlify
   - Netlify will automatically detect the build settings
   - Or use the Netlify CLI: `netlify deploy --prod`

## 🔧 Configuration

### Environment Variables

Currently, no environment variables are required. Image URLs are hardcoded in the component.

### Customization

- **Colors**: Edit CSS variables in `src/pages/LandingPage.module.css` (root `:root` selector)
- **Content**: Update text content in `src/pages/LandingPage.tsx`
- **Images**: Replace image URLs in the `IMAGES` constant in `LandingPage.tsx`
- **Contact Form**: Replace the placeholder in the `ContactForm` component with your GHL iframe

## 📋 Placeholders to Update

Before deploying to production, the following placeholders need to be replaced with actual content:

### 1. Media Feature Badges (Hero Section)

**Location**: `src/pages/LandingPage.tsx` - `Hero` component (lines ~160-164)

**Current State**: Three placeholder badges displaying "Media Feature" text

**Action Required**: 
- Replace the placeholder text with actual media mentions (e.g., "Featured in Forbes", "As seen on CNN")
- Or replace with media outlet logos/images
- Update all three `<span className={styles.mediaBadge}>Media Feature</span>` elements

**Example**:
```tsx
<span className={styles.mediaBadge}>Featured in Forbes</span>
<span className={styles.mediaBadge}>As seen on CNN</span>
<span className={styles.mediaBadge}>Wall Street Journal</span>
```

### 2. Contact Form (Contact Section)

**Location**: `src/pages/LandingPage.tsx` - `ContactForm` component (lines ~589-596)

**Current State**: Placeholder div with "Survey Form Coming Soon" message

**Action Required**:
- Replace the `<div className={styles.contactFormPlaceholder}>` content with your GoHighLevel (GHL) iframe
- Remove the placeholder text and embed the actual form iframe

**Example**:
```tsx
<div className={styles.contactFormContainer}>
  <iframe 
    src="YOUR_GHL_FORM_URL" 
    width="100%" 
    height="600"
    frameBorder="0"
    title="Contact Form"
  />
</div>
```

### 3. Footer Links (Footer Section)

**Location**: `src/pages/LandingPage.tsx` - `Footer` component (lines ~613-614)

**Current State**: Privacy Policy and Terms of Service links point to `#` (placeholder)

**Action Required**:
- Update the `href` attributes with actual URLs to your Privacy Policy and Terms of Service pages
- Ensure these pages exist and are accessible

**Example**:
```tsx
<a href="/privacy-policy" className={styles.footerLink}>Privacy Policy</a>
<a href="/terms-of-service" className={styles.footerLink}>Terms of Service</a>
```

### Summary Checklist

- [ ] Replace "Media Feature" badges with actual media mentions/logos
- [ ] Replace contact form placeholder with GHL iframe or actual form
- [ ] Update Privacy Policy link in footer
- [ ] Update Terms of Service link in footer

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

Private project - All rights reserved.

## 👥 Contact

For questions or support regarding this landing page, please contact the development team.

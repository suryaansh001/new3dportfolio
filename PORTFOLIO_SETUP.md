# Suryaansh Sharma's Portfolio

A modern, animated portfolio website built with Next.js, React, Framer Motion, and Tailwind CSS showcasing AI development expertise, projects, experience, and certifications.

## Features

- **Hero Section**: Animated introduction with typing effect and social links
- **About Section**: Professional bio with education and current status
- **Projects Section**: 14 featured projects with filtering by category (Web Development, AI & ML, Robotics)
- **Experience Section**: Animated timeline of professional journey and roles
- **Certifications Section**: Detailed list of professional credentials and certifications
- **Skills Section**: Categorized technical expertise with interactive hover effects
- **Contact Section**: Contact information and form submission
- **Smooth Animations**: Framer Motion animations throughout with scroll-triggered effects
- **Dark Theme**: Professional dark mode with purple (#8B5CF6) and pink (#EC4899) accent colors
- **Responsive Design**: Fully responsive across mobile, tablet, and desktop

## Project Structure

```
components/
├── hero.tsx              # Hero section with typing animation
├── about.tsx            # About/bio section
├── works.tsx            # Projects gallery with filtering
├── experience.tsx       # Experience timeline
├── certifications.tsx   # Certifications display
├── skills.tsx          # Skills grid
├── contact.tsx         # Contact form and info
├── navbar.tsx          # Navigation header
├── footer.tsx          # Footer with CTA
├── custom-cursor.tsx   # Custom cursor effect
├── smooth-scroll.tsx   # Smooth scroll behavior
├── sentient-sphere.tsx # 3D background element
└── section-blend.tsx   # Section divider

public/
├── resume.pdf          # Resume file
└── projects/          # Project images
    └── placementportal.webp

app/
├── page.tsx           # Main page composition
├── layout.tsx         # Root layout with metadata
└── globals.css        # Global styles
```

## Key Components

### Hero Section
- Animated name and title
- Typing animation cycling through 5 different taglines
- Social media links (GitHub, LinkedIn, Email)
- Call-to-action buttons (View Projects, Contact Me)

### Projects Section
- 14 projects across 3 categories
- Filter by category functionality
- Tech stack badges
- Links to demo and repository
- Hover effects with image preview

### Experience Section
- 6 professional experiences with timeline animation
- Company, role, and period information
- Description and key skills for each role

### Certifications Section
- 8 professional certifications
- Issuer and year information
- Skills gained for each certification
- Links to verify certificates

### Skills Section
- 6 skill categories
- Interactive skill items with hover animation
- Gradient accents on hover

## Customization

### Colors
The portfolio uses a dark theme with purple and pink accents. Update colors in the component classes:
- Purple: `#8B5CF6` or `purple-500/600`
- Pink: `#EC4899` or `pink-500/600`

### Profile Image
Replace the profile image placeholder in `components/about.tsx` with your actual image at `/public/suryaansh2.png`

### Resume
Update `/public/resume.pdf` with your actual resume file

### Project Images
Add project images to `/public/projects/` and update paths in `components/works.tsx`

### Social Links
Update social media URLs in:
- `components/hero.tsx`
- `components/footer.tsx`
- `components/contact.tsx`

## Technologies Used

- **Framework**: Next.js 16
- **UI Library**: React 19.2
- **Styling**: Tailwind CSS 4.1
- **Animations**: Framer Motion 12.23
- **Icons**: Lucide React
- **3D Graphics**: Three.js, React Three Fiber
- **Smooth Scroll**: Lenis

## Installation & Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

The application will start at `http://localhost:3000`

## Performance Features

- Optimized animations with Framer Motion
- Smooth scroll with Lenis library
- Responsive images and lazy loading
- Tailwind CSS for minimal CSS output
- Custom cursor for enhanced UX

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This portfolio is a personalized template. Feel free to customize it with your own information and projects.

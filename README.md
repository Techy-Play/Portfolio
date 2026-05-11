# Lokesh Paneru - Portfolio

A modern, responsive portfolio website built with Next.js 16, React 19, TypeScript, and Tailwind CSS. Features a comprehensive showcase of projects, skills, experience, and achievements with smooth animations and a beautiful dark theme.

## Features

- **Modern Design**: Dark theme with cyan accents, smooth gradients, and glassmorphism effects
- **Responsive Layout**: Fully responsive design that works seamlessly on all devices
- **Smooth Animations**: Fade-in and slide animations for engaging visual effects
- **Fast Performance**: Built with Next.js for optimal performance and SEO
- **Contact Form**: Functional contact form with email validation and API integration
- **Project Showcase**: Detailed project cards with links to GitHub and live demos
- **Skills Organization**: Skills categorized by type with visual badges
- **Achievement Tracking**: Display of awards and recognitions with timeline
- **Mobile Navigation**: Hamburger menu for mobile devices with smooth transitions
- **Accessibility**: Semantic HTML and ARIA labels for better accessibility

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4 with custom configuration
- **Language**: TypeScript
- **Animations**: CSS animations and Framer Motion
- **Fonts**: Google Fonts (Outfit)
- **Image Optimization**: Next.js Image component

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Techy-Play/Portfolio.git
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
app/
├── layout.tsx           # Root layout with metadata
├── page.tsx             # Main portfolio page
├── globals.css          # Global styles
├── api/
│   └── contact/
│       └── route.ts     # Contact form API endpoint
├── data/
│   └── portfolio-data.ts # Centralized portfolio content
└── components/
    ├── Header.tsx       # Navigation header
    ├── Hero.tsx         # Hero section with intro
    ├── Profile.tsx      # Profile/About section
    ├── Education.tsx    # Education timeline
    ├── Experience.tsx   # Work experience
    ├── Projects.tsx     # Project showcase
    ├── Skills.tsx       # Technical skills
    ├── Certifications.tsx # Certifications
    ├── Achievements.tsx # Awards and achievements
    ├── Interests.tsx    # Interests and passions
    ├── Extracurriculars.tsx # Activities
    ├── Contact.tsx      # Contact form
    ├── Footer.tsx       # Footer with links
    ├── SectionWrapper.tsx # Reusable section component
    └── ScrollToTop.tsx  # Scroll to top button
```

## Customization

### Update Portfolio Content

Edit `app/data/portfolio-data.ts` to update:
- Personal information
- Education details
- Work experience
- Projects and links
- Skills and expertise
- Certifications
- Achievements
- Contact information

### Modify Styling

The color scheme and styling can be customized in:
- `tailwind.config.ts` - Tailwind color and theme configuration
- `app/globals.css` - Global styles and animations
- Component files - Individual component styling

### Add Profile Image

Replace `public/profile.JPG` with your profile image. Update the filename in `app/data/portfolio-data.ts` if needed.

## Building for Production

```bash
npm run build
npm run start
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy with optimal settings
4. Set up a custom domain in Vercel dashboard

### Environment Variables

Create a `.env.local` file for environment variables (if needed):
```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## Performance Optimizations

- Image optimization with Next.js Image component
- Code splitting and lazy loading
- CSS minification with Tailwind
- SEO optimization with metadata
- Responsive images for different screen sizes

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contact

For inquiries about projects or collaboration:
- Email: lokeshpaneru20508@email.com
- Phone: +91 9719893725
- Location: Haldwani, Uttarakhand, India

## Social Links

- [GitHub](https://github.com/Techy-Play)
- [LinkedIn](https://linkedin.com/in/lokeshpaneru)

## License

This project is open source and available under the MIT License.

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons and inspiration from various design resources

---

**Last Updated**: May 2026
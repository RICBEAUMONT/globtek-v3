# Globtek Engineering Website - About Us Page

## Overview
The About Us page showcases Globtek's engineering expertise, company history, leadership, and core values. The page features a modern, responsive design with interactive elements and smooth animations.

## Page Sections

### 1. Hero Section
- Full-screen hero section with animated background
- Dynamic image carousel showcasing engineering projects
- Key statistics and call-to-action buttons
- Floating cards highlighting key capabilities
- Responsive grid layout for mobile and desktop

### 2. Company Introduction
- Two-column layout with company story
- Interactive highlight cards showcasing:
  - Global Reach
  - Company History (Est. 2013)
  - South African Base
  - Community Focus
- Animated hover effects and transitions

### 3. The Globtek Way
- Custom component showcasing company pillars:
  - Get it Right the First Time
  - Pursuit of Excellence
  - Pro-active Leadership
  - People Relationships
- Interactive cards with focus and impact details

### 4. Company Timeline
- Visual journey through company milestones
- Key events from 2013 to present
- Custom Journey component for timeline display

### 5. Expertise Section
- Three-column layout showcasing core competencies:
  - Engineering Design
  - Technical Consulting
  - Project Management
- Statistics and experience metrics
- Interactive hover effects

### 6. Leadership Section
- Two-column layout with CEO's message
- Professional image with floating credentials card
- Key achievements and statistics
- Call-to-action for meetings
- Responsive design for all devices

### 7. Core Values Section
- Two-column layout with values explanation
- Interactive cards for each core value:
  - Integrity, Honesty, and Professionalism
  - Commitment and Accountability
  - Learning and Development
  - Excellence in All We Do
- Animated hover effects and number labels

## Technical Features

### Animations & Interactivity
- Smooth hover transitions
- Gradient animations
- Scale transformations
- Opacity transitions
- Interactive cards with hover states

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Responsive typography
- Adaptive spacing
- Optimized images

### Performance Optimization
- Next.js Image component for optimal loading
- Lazy loading for off-screen images
- Efficient CSS with Tailwind
- Minimal JavaScript usage
- Optimized animations

### Accessibility
- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Sufficient color contrast
- Clear typography hierarchy

## Components Used

### Layout Components
- Navbar (shared component)
- GlobtekWay (custom section)
- Journey (timeline component)

### UI Elements
- Interactive cards
- Gradient backgrounds
- Floating badges
- Animated icons
- Call-to-action buttons

## Styling

The page uses a consistent color scheme defined by CSS variables:
- Primary: Company's main brand color
- Accent: Highlight color for important elements
- Text colors: Carefully selected for readability
- Gradients: Used for visual depth and interest

## Future Enhancements

Potential improvements to consider:
1. Add more interactive elements
2. Implement dark mode
3. Add more animation variations
4. Enhance mobile experience
5. Add more social proof elements

## Maintenance

To update the page content:
1. Modify the data constants at the top of the file
2. Update images in the public/images directory
3. Adjust text content in the JSX
4. Test responsive behavior
5. Verify all links and CTAs

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Contact Page

The contact page (`/contact`) provides a comprehensive interface for users to get in touch with Globtek Engineering. The page is designed with a modern, responsive layout that prioritizes user experience and brand consistency.

### Layout Structure

The page is divided into three main sections:

1. **Main Contact Grid (Two Columns)**
   - Left Column: Contact information with gradient background
   - Right Column: Contact form with light/dark mode support

2. **Visit Us Section**
   - Interactive map integration
   - Office address overlay
   - Visual enhancements with gradient effects

3. **Business Hours Section**
   - Operating hours display
   - Additional visit planning information
   - Premium card design with brand colors

### Key Features

- **Responsive Design**: Adapts seamlessly from mobile to desktop views
- **Brand Consistency**: Uses CSS variables for colors and gradients:
  - `--color-bg-gradient-from`
  - `--color-bg-gradient-to`
  - `--color-bg-light`
  - `--color-bg-dark-transparent`
  - `--color-bg-white-transparent`
  - `--color-bg-darker-transparent`
  - `--color-accent`

- **Interactive Elements**:
  - Hover effects on contact cards
  - Smooth transitions
  - Form validation
  - Google Maps integration

### Contact Form Features

- Real-time validation
- Budget ranges in ZAR (South African Rand)
- Error handling
- Success confirmation
- Mobile-responsive inputs

### Business Hours

- Monday - Friday: 9:00 AM - 6:00 PM
- Saturday: 9:00 AM - 1:00 PM
- Sunday: Closed

### Location

62 Smiso Nkwanyana Road, Morningside, Durban

### Components Used

- `ContactForm`: Handles form submission and validation
- `Container`: Maintains consistent max-width (1140px)
- Icons from `lucide-react`: Mail, Phone, MapPin, Clock

### Styling Notes

- Uses a combination of Tailwind CSS and CSS variables
- Implements dark mode support
- Maintains consistent spacing and typography
- Uses gradient overlays for visual depth
- Implements responsive padding and margins

# Globtek v3

## GitHub Integration Setup

The Updates page fetches commit history from GitHub to display recent changes. To make this work, you need to:

1. **Create a GitHub Personal Access Token**:
   - Go to GitHub.com → Settings → Developer settings → Personal access tokens → Tokens (classic)
   - Click "Generate new token (classic)"
   - Give it a name like "Globtek Updates"
   - Select the `repo` scope to allow access to repository data
   - Click "Generate token"
   - Copy the token (you won't be able to see it again)

2. **Add the Token to Your Environment**:
   - Open the `.env.local` file in the root of your project
   - Replace `your_github_token_here` with the token you copied
   - Save the file

3. **Verify Repository Access**:
   - Make sure the repository `ricardobeaumont/globtek-v3` exists
   - Ensure the token has access to this repository
   - If using a different repository, update the `owner` and `repo` variables in `src/lib/github.ts`

4. **Restart Your Development Server**:
   - Stop your current server
   - Run `npm run dev` to restart with the new environment variables

## Troubleshooting

If you see a 404 error when fetching commits:

1. **Check Repository Name**: Verify that the repository name in `src/lib/github.ts` is correct
2. **Verify Token Permissions**: Make sure your token has the `repo` scope
3. **Check Repository Privacy**: If the repository is private, ensure your token has access to it
4. **Look at Console Logs**: The application logs detailed error messages to help diagnose issues

## Development

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

## Production

```bash
# Build for production
npm run build

# Start the production server
npm start
```

## Reusable Component: Core Services Section

This section displays a badge, heading, subheading, and a grid of expandable service cards.

- The badge, heading, and subheading can be customized for different pages.
- The service cards are controlled by a single expanded state, ensuring only one is open at a time.
- The layout is responsive and visually consistent with the site's design system.

### How to Reuse
- Extract this section into a separate component (e.g., `components/sections/CoreServicesSection.tsx`).
- Pass props for badge text, heading, subheading, and card content.
- Use on any page that needs a similar expandable services/capabilities block.

### Example Usage
```jsx
<CoreServicesSection
  badgeText="Core Services"
  heading={<>From Concept to Completion<br />Our Core Capabilities</>}
  subheading="A focused suite of services for every stage of marine engineering"
  cards={/* array of card data */}
/>
```

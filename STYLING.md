# Globtek Design System

## Color System

### Primary Colors
- Primary: `#1a222c` (Dark gray/black)
- Primary Light: `#2d2829`
- Primary Dark: `#1a1718`

### Accent Colors
- Accent: `#e43d30` (Red)
- Accent Light: `#e85d52`
- Accent Dark: `#b63126`

### Text Colors
- Text Primary: `#1a222c`
- Text Secondary: `#4a4a4a`
- Text Light: `#ffffff`

### Background Colors
- Background Primary: `#ffffff`
- Background Secondary: `#f5f5f5`

## Typography

### Headings

#### Hero Main Heading
- Font Size: `text-4xl md:text-6xl`
- Tracking: `tracking-tight`
- Line Height: Default
- Font Weight: Bold for first line, Regular for second line
- Color: White for first line, Accent color for second line
- Alignment: Right-aligned on desktop, centered on mobile

#### Hero Sub-copy
- Font Size: `text-lg md:text-xl`
- Tracking: `tracking-wide`
- Line Height: `leading-tight`
- Font Weight: Regular
- Color: White
- Special Elements: "+" symbol in accent color

#### Section Headings
- Font Size: `text-3xl md:text-4xl`
- Font Weight: Bold
- Color: Primary text color
- Special Elements: "+" symbol in accent color

### Body Text
- Font Size: `text-lg`
- Line Height: `leading-relaxed`
- Color: Text secondary
- Max Width: `max-w-xl` for readability

## Layout

### Spacing
- Section Padding: `py-16`
- Grid Gaps: `gap-8 md:gap-12`
- Container Max Width: `max-w-[1140px]`
- Custom Padding: `pt-[40px]` for specific sections

### Grid System
- Mobile: Single column
- Tablet: Two columns
- Desktop: Four columns (where applicable)

### Component Spacing
- Card Padding: `p-6`
- Button Padding: `px-6 py-3`
- Icon Sizes: `h-8 w-8`

## Interactive Elements

### Buttons
- Primary Button:
  - Background: Accent color
  - Text: White
  - Hover: Darker accent color
  - Padding: `px-6 py-3`
  - Border Radius: `rounded`
  - Transition: `transition-colors`

### Cards
- Background: White
- Shadow: `shadow-sm`
- Hover: `hover:shadow-md`
- Transition: `transition-shadow duration-300`

## Responsive Design
- Mobile-first approach
- Breakpoints:
  - Mobile: Default
  - Tablet: `md:` (768px)
  - Desktop: `lg:` (1024px)

## CSS Variables
All colors are defined as CSS variables in `globals.css` for consistent usage across the application:

```css
:root {
  --color-primary: #1a222c;
  --color-primary-light: #2d2829;
  --color-primary-dark: #1a1718;
  --color-accent: #e43d30;
  --color-accent-light: #e85d52;
  --color-accent-dark: #b63126;
  --color-text-primary: #1a222c;
  --color-text-secondary: #4a4a4a;
  --color-text-light: #ffffff;
  --color-bg-primary: #ffffff;
  --color-bg-secondary: #f5f5f5;
}
```

## Usage Examples

### Hero Section
```jsx
<div className="text-[var(--color-text-light)] text-center md:text-right">
  <h1 className="text-4xl md:text-6xl tracking-tight">
    <span className="font-bold">APPLIED</span>
    <br />
    <span className="font-normal text-[var(--color-accent)]">INGENUITY</span>
  </h1>
</div>
```

### Section Heading
```jsx
<h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--color-text-primary)]">
  EXPERT ENGINEERS<span className="text-[var(--color-accent)]">+</span>
  <br />
  <span className="font-normal">SURVEYORS</span>
</h2>
```

### Button
```jsx
<Link
  className="inline-flex items-center px-6 py-3 bg-[var(--color-accent)] text-[var(--color-text-light)] font-medium rounded hover:bg-[var(--color-accent-dark)] transition-colors"
>
  Button Text
  <ArrowRight className="ml-2 h-5 w-5" />
</Link>
``` 

## Service Card Style Pattern (2024-06)

- Background: Brand dark (`#1a222c`)
- Title: White (`text-white`)
- Body text: Light (`text-gray-100`)
- Accent elements: Red (`#e43d30`) for icons and highlights
- No border, ring, or glow effect on expand/active state
- Use for all expandable/accordion service cards for visual consistency across service pages

## Interactive Image Slider Component (2024-06)

### Features:
- **Horizontal scrolling animation**: Images scroll slowly to the left in infinite loop
- **Hover pause**: Animation pauses when user hovers over the slider
- **Click to enlarge**: Clicking any image opens a full-screen modal
- **Hover effects**: Images scale up slightly on hover with overlay and magnifying glass icon

### Required CSS (add to globals.css):
```css
@keyframes scroll-left {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-scroll-left {
  animation: scroll-left 40s linear infinite;
}

.animate-scroll-left.paused {
  animation-play-state: paused;
}
```

### Component Structure:
```tsx
// State variables
const [isHovered, setIsHovered] = useState(false);
const [enlargedImage, setEnlargedImage] = useState<string | null>(null);

// Handler functions
const handleImageClick = (src: string) => {
  setEnlargedImage(src);
};

const closeEnlargedImage = () => {
  setEnlargedImage(null);
};

// Slider container
<section className="w-full py-8 overflow-hidden">
  <div className="relative w-full">
    <div 
      className={`flex items-center gap-8 animate-scroll-left ${isHovered ? 'paused' : ''}`} 
      style={{ width: 'max-content' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {images.concat(images).map((src, idx) => (
        <div 
          key={idx} 
          className="relative h-64 w-[420px] flex-shrink-0 rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105"
          onClick={() => handleImageClick(src)}
        >
          <Image
            src={src}
            alt={`Slider image ${idx % images.length + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 80vw, 420px"
            priority={idx < images.length}
          />
          <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
            <svg className="w-8 h-8 text-white opacity-0 hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Enlarged Image Modal */}
{enlargedImage && (
  <div 
    className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
    onClick={closeEnlargedImage}
  >
    <div className="relative max-w-4xl max-h-[90vh] w-full h-full">
      <Image
        src={enlargedImage}
        alt="Enlarged image"
        fill
        className="object-contain"
        sizes="(max-width: 768px) 90vw, 80vw"
      />
      <button
        onClick={closeEnlargedImage}
        className="absolute top-4 right-4 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors duration-300"
        aria-label="Close enlarged image"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </div>
)}

### Usage Notes:
- Duplicate the images array (`images.concat(images)`) to create seamless infinite loop
- Container needs padding (`py-8`) to accommodate hover zoom effects
- Animation duration is 40s for smooth, slow scrolling
- Images should be consistent dimensions (420px width, 256px height recommended)
- Modal uses fixed positioning with high z-index to appear above all content 
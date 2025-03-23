# Globtek Design System

## Color System

### Primary Colors
- Primary: `#231f20` (Dark gray/black)
- Primary Light: `#2d2829`
- Primary Dark: `#1a1718`

### Accent Colors
- Accent: `#e43d30` (Red)
- Accent Light: `#e85d52`
- Accent Dark: `#b63126`

### Text Colors
- Text Primary: `#231f20`
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
  --color-primary: #231f20;
  --color-primary-light: #2d2829;
  --color-primary-dark: #1a1718;
  --color-accent: #e43d30;
  --color-accent-light: #e85d52;
  --color-accent-dark: #b63126;
  --color-text-primary: #231f20;
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
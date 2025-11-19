# Component Development Workflow - Homepage Sections

This document outlines the systematic approach for developing homepage section components in the Alloro site project.

## Overview

Homepage sections are built iteratively, one component at a time, following a two-step verification process before implementation.

## Folder Structure

```
src/
  components/
    home/
      sections/
        HeroSection.tsx
        FeaturesSection.tsx
        ...
public/
  images/
    section-name/
      image1.png
      image2.jpg
      ...
```

## Development Process

### Step 1: Screenshot & Requirements Analysis

When a new section is to be developed:

1. User provides a screenshot of the desired section
2. User provides additional instructions specific to that section
3. **DO NOT implement immediately**

### Step 2: Pre-Implementation Checklist

Before writing any code, analyze the screenshot and create a detailed checklist including:

#### Typography

- **Font sizes** for all text elements (headings, body, labels, etc.)
- **Font weights** for each text element (e.g., 400, 500, 600, 700)
- Note: User provides desktop sizes; developer must ensure mobile responsiveness

#### Colors

- **Hex codes** for all colors used
  - Background colors
  - Text colors
  - Border colors
  - Button colors (normal, hover, active states)
  - Accent colors

#### Images

- **Image paths** for all visual assets
- Naming convention: descriptive lowercase with hyphens
- Location: `/public/section-name/image-name.ext`
- Public URLs: `/section-name/image-name.ext`
- Format recommendations: Use WebP for optimization alongside standard formats

#### Spacing & Layout

- Section padding (desktop & mobile)
- Component gaps/margins
- Grid/Flex configurations

#### Interactive Elements

- Button styles and states
- Hover effects
- Animations (if any)
- For carousels: Suggest Tailwind-compatible plugins (e.g., Swiper, Embla Carousel)

### Step 3: User Approval

Present the checklist to the user for:

- Confirmation of measurements
- Approval of image paths
- Verification of color codes
- Any adjustments needed

### Step 4: Implementation

After user approval:

#### Component Structure

```tsx
// src/components/home/sections/SectionName.tsx

export default function SectionNameSection() {
  return <section className="...">{/* Section content */}</section>;
}
```

#### Styling Guidelines

- **Tailwind CSS only** - No custom CSS/inline styles
- Use Tailwind utility classes for all styling
- Responsive design with mobile-first approach
- Test breakpoints: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`

#### Mobile Responsiveness

- Desktop font sizes provided by user
- Scale down appropriately for mobile (avoid oversized text)
- Adjust spacing for smaller screens
- Ensure touch targets are adequate (min 44x44px)
- Test layout at multiple breakpoints

#### Export

- Use **default export** for all section components
- Named exports for any sub-components if needed

### Step 5: Integration

Add the new section to [`Home.tsx`](../../pages/Home.tsx):

```tsx
import SectionNameSection from "@/components/home/sections/SectionNameSection";

export default function Home() {
  return (
    <main>
      {/* Other sections */}
      <SectionNameSection />
    </main>
  );
}
```

## Best Practices

### Component Design

- Each section is self-contained and independent
- Minimal prop drilling - keep sections autonomous
- Reusable sub-components when patterns repeat

### Performance

- Optimize images before adding to `/public`
- Use appropriate image formats (WebP recommended)
- Lazy load images below the fold
- Consider using Next.js Image component if applicable

### Accessibility

- Use semantic HTML elements
- Include proper ARIA labels where needed
- Ensure keyboard navigation works
- Maintain proper heading hierarchy (h1 → h2 → h3)

### Carousel Implementation

When carousels are needed:

- Recommend Tailwind-compatible libraries:
  - **Swiper**: Full-featured with Tailwind support
  - **Embla Carousel**: Lightweight, flexible
  - **Keen Slider**: Performant, touch-friendly
- Ensure mobile swipe gestures work correctly
- Provide pagination/navigation controls

## Troubleshooting

### Common Issues

**Images not loading:**

- Verify image path matches `/public` structure
- Check image file extension (case-sensitive)
- Confirm image exists in public directory

**Responsive layout breaks:**

- Review Tailwind breakpoint classes
- Test at each breakpoint (375px, 640px, 768px, 1024px, 1280px)
- Check for fixed widths that should be responsive

**Colors don't match:**

- Use exact hex codes from checklist
- Consider adding custom colors to `tailwind.config.js` if frequently used
- Test in different lighting conditions/screens

## Quick Reference

### File Paths

- Section components: `src/components/home/sections/`
- Images: `public/section-name/`
- Homepage integration: `src/pages/Home.tsx`

### Naming Conventions

- Components: PascalCase + "Section" suffix (e.g., `HeroSection.tsx`)
- Images: lowercase-with-hyphens (e.g., `hero-background.jpg`)
- Folders: lowercase-with-hyphens (e.g., `hero-section/`)

### Responsive Breakpoints (Tailwind)

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

---

**Last Updated:** 2025-01-19  
**Project:** Alloro Site  
**Framework:** React + TypeScript + Tailwind CSS + Vite

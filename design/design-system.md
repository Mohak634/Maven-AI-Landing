# Maven AI Design System

This document provides a comprehensive mapping of the design system tokens extracted from Figma. All tokens use semantic naming for maintainability and consistency.

## Table of Contents

1. [Color Tokens](#color-tokens)
2. [Typography Tokens](#typography-tokens)
3. [Spacing Tokens](#spacing-tokens)
4. [Border Radius Tokens](#border-radius-tokens)
5. [Shadow/Effect Tokens](#shadoweffect-tokens)
6. [Component Tokens](#component-tokens)
7. [Usage Examples](#usage-examples)

---

## Color Tokens

### Surface Colors

```css
--surface-primary: #ffffff        /* Primary background */
--surface-secondary: #f3f6f7      /* Secondary background */
--surface-accent: #1c1c1c         /* Accent surface (buttons, highlights) */
--surface-neutral: #747f8d        /* Neutral surface */
--surface-overlay: rgba(243, 246, 247, 0.5)  /* Overlay background (navbar) */
```

### Text Colors

```css
--text-primary: #1c1c1c           /* Primary text color */
--text-secondary: #575e67         /* Secondary text color */
--text-neutral: #ffffff           /* Neutral text (on dark backgrounds) */
--text-neutral-800: #4b5162       /* Neutral text variant 800 */
--text-neutral-700: #626981       /* Neutral text variant 700 */
--text-neutral-alpha-50: rgba(255, 255, 255, 0.5)  /* Semi-transparent text */
```

### Icon Colors

```css
--icon-black: #1c1c1c             /* Black icons */
--icon-white: #ffffff             /* White icons */
```

### Border Colors

```css
--border-default: #747f8d         /* Default border color */
```

---

## Typography Tokens

### Font Families

```css
--font-family-google-sans: 'Google Sans', sans-serif
--font-family-source-serif: 'Source Serif Pro', serif
--font-family-inter: 'Inter', sans-serif
```

### Font Weights

```css
--font-weight-regular: 400
--font-weight-medium: 500
--font-weight-bold: 700
```

### Typography Styles

#### Display Styles
- **Display XL**: 64px / 80px line-height (Source Serif Pro, Regular)
  - Used for hero headlines and large display text

#### Heading Styles
- **Heading XL**: 64px / 80px line-height (Google Sans, Medium)
  - Used for main section titles
- **Heading LG**: 40px / 50px line-height (Google Sans, Medium)
  - Used for subsection titles and logo text
- **Heading MD**: 32px / 40px line-height (Google Sans, Regular)
  - Used for content section headings
- **Heading SM**: 28px / 35px line-height (Google Sans, Regular)
  - Used for navigation links and smaller headings

#### Content/Body Styles
- **Content XL**: 32px / 40px line-height (Google Sans, Regular)
- **Content LG**: 24px / 30px line-height (Google Sans, Regular)
- **Content MD**: 20px / 25px line-height (Google Sans, Regular)
- **Content SM**: 16px / 20px line-height (Google Sans, Regular)

#### Special Styles
- **CTA Text**: 24px / 30px line-height (Google Sans, Bold)
  - Used for call-to-action buttons
- **Body Base**: 16px / 1.6 line-height (Inter, Regular)
  - Standard body text

#### Step Number Styles
- **Step Active**: 64px / 80px line-height (Google Sans, Medium)
- **Step Inactive**: 128px / 160px line-height (Google Sans, Regular)

---

## Spacing Tokens

### Base Spacing Scale

```css
--space-xxs: 4px
--space-xs: 8px
--space-sm: 12px
--space-md: 16px
--space-lg: 24px
--space-xl: 32px
--space-xxl: 48px
--space-xxxl: 64px
--space-xxxxl: 90px
```

### Semantic Spacing

```css
--semantic-size-24: 24px
--semantic-space-8: 8px
--stack-4xl: 40px        /* Vertical spacing */
--inline-4xl: 40px       /* Horizontal spacing */
```

### Layout Spacing

```css
--layout-container-max-width: 1328px
--layout-container-padding-x: 24px
--layout-container-padding-y-sm: 16px
--layout-container-padding-y-md: 21px
--layout-container-padding-y-lg: 48px

--layout-gap-sm: 16px
--layout-gap-md: 24px
--layout-gap-lg: 40px
--layout-gap-xl: 45px
```

---

## Border Radius Tokens

```css
--border-radius-none: 0
--border-radius-xs: 2px      /* Buttons */
--border-radius-sm: 4px      /* Input fields */
--border-radius-md: 6px      /* Cards, larger buttons */
--border-radius-lg: 8px      /* Prominent cards */
--border-radius-xl: 11px
--border-radius-full: 50%    /* Circular elements */
```

---

## Shadow/Effect Tokens

### Drop Shadows

```css
--shadow-drop-small: 0 -4px 8px rgba(0, 0, 0, 0.5)
--shadow-drop-medium: 0 -5px 20px rgba(0, 0, 0, 0.25)
```

### Inner Shadows

```css
--shadow-inner-text: inset 6px 5px 8px rgba(0, 0, 0, 0.5)
--shadow-inner-small: inset -4px 5px 4px rgba(0, 0, 0, 0.35)
--shadow-inner-card: [multi-layer shadow for card depth]
```

### Card Effects

```css
--shadow-card-inactive: [multi-layer shadow for inactive cards]
--shadow-card-active: [multi-layer shadow for active cards]
```

---

## Component Tokens

### Navbar

```css
--navbar-height: 90px
--navbar-background: var(--surface-overlay)
--navbar-padding-y: 21px
--navbar-logo-size: 64px
--navbar-logo-text-size: 40px
--navbar-link-size: 28px
--navbar-link-gap: 45px
```

### Buttons

#### Primary Button
```css
--button-primary-height: 56px
--button-primary-background: var(--surface-accent)
--button-primary-text: var(--text-neutral)
--button-primary-text-size: 24px
--button-primary-border-radius: 2px
--button-primary-padding-x: 16px
--button-primary-padding-y: 16px
```

#### Secondary Button
```css
--button-secondary-height: 56px
--button-secondary-background: var(--surface-primary)
--button-secondary-text: var(--text-primary)
--button-secondary-border: 1px solid var(--border-default)
--button-secondary-border-radius: 6px
--button-secondary-padding-x: 16px
--button-secondary-padding-y: 16px
```

### Cards

```css
--card-padding: 24px
--card-border-radius: 6px
--card-background: var(--surface-primary)
--card-shadow: var(--shadow-card-inactive)
```

### Input Fields

```css
--input-padding: 12px
--input-border: 1px solid var(--border-default)
--input-border-radius: 4px
--input-background: var(--surface-primary)
--input-text: var(--text-primary)
```

### Hover States

```css
--hover-opacity: 0.8
--hover-transition: 0.2s ease
```

---

## Usage Examples

### Using Typography Tokens

```css
/* In a CSS Module file */
.heading {
  font-family: var(--typography-heading-lg-family);
  font-size: var(--typography-heading-lg-size);
  line-height: var(--typography-heading-lg-line-height);
  font-weight: var(--typography-heading-lg-weight);
  color: var(--text-primary);
}

/* Or use utility classes in globals.css */
<h1 className="text-heading-lg text-primary">Heading</h1>
```

### Using Color Tokens

```css
.button {
  background-color: var(--button-primary-background);
  color: var(--button-primary-text);
  border-radius: var(--button-primary-border-radius);
}
```

### Using Spacing Tokens

```css
.container {
  max-width: var(--layout-container-max-width);
  padding: var(--layout-container-padding-y-md) var(--layout-container-padding-x);
  margin: 0 auto;
}

.card {
  padding: var(--card-padding);
  gap: var(--layout-gap-md);
}
```

### Using Component Tokens

```css
.navbar {
  height: var(--navbar-height);
  background: var(--navbar-background);
  padding: var(--navbar-padding-y) 0;
}

.navLink {
  font-size: var(--navbar-link-size);
  color: var(--text-primary);
  gap: var(--navbar-link-gap);
}
```

---

## Best Practices

1. **Always use semantic tokens** - Don't use hardcoded values. Use the design tokens instead.
2. **Use component tokens when available** - They provide pre-configured values for common components.
3. **Maintain consistency** - Use the same tokens across similar components.
4. **Follow the spacing scale** - Use the predefined spacing tokens rather than arbitrary values.
5. **Respect typography hierarchy** - Use the appropriate typography style for the content level.

---

## Token Naming Convention

Tokens follow this naming pattern:
- `--category-subcategory-variant`: e.g., `--text-primary`, `--surface-accent`
- Component tokens: `--component-property`: e.g., `--button-primary-height`
- Layout tokens: `--layout-property-variant`: e.g., `--layout-container-max-width`

---

## Source

All tokens are extracted from the Figma design system:
- Figma File: Maven AI
- Node ID: 146-466
- Variable Set ID: 153-38

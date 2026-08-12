---
name: Liquid Industrial
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#414753'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#717784'
  outline-variant: '#c1c6d5'
  surface-tint: '#005db6'
  primary: '#005bb1'
  on-primary: '#ffffff'
  primary-container: '#0973dd'
  on-primary-container: '#fefcff'
  inverse-primary: '#a9c7ff'
  secondary: '#5d5e5f'
  on-secondary: '#ffffff'
  secondary-container: '#e2e2e2'
  on-secondary-container: '#636465'
  tertiary: '#006b2d'
  on-tertiary: '#ffffff'
  tertiary-container: '#00873b'
  on-tertiary-container: '#f7fff3'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#a9c7ff'
  on-primary-fixed: '#001b3d'
  on-primary-fixed-variant: '#00468b'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c6'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#6bff8f'
  tertiary-fixed-dim: '#4ae176'
  on-tertiary-fixed: '#002109'
  on-tertiary-fixed-variant: '#005321'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-lg:
    fontFamily: Libre Franklin
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Libre Franklin
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  gutter: 20px
  margin: 24px
---

## Brand & Style

The design system is a high-fidelity homage to the early 2000s era of computing, specifically the intersection of Mac OS X Aqua and the translucent industrial design of the Bondi Blue iMac era. It prioritizes depth, tactility, and a "lickable" interface quality.

The aesthetic combines **Skeuomorphism** with **Glassmorphism**. Key characteristics include:
- **Glossy Textures:** Elements appear to be made of glass, polished acrylic, or brushed aluminum.
- **Dimensionality:** Heavy use of vertical gradients, inner glows, and drop shadows to simulate physical objects.
- **Optimism:** A bright, high-contrast palette that feels friendly yet professional.
- **Physical Metaphor:** UI components behave like physical buttons and recessed trays, emphasizing clear affordances through light and shadow.

## Colors

The palette is rooted in metallic neutrals and vibrant "Jelly" accents.

- **Main Canvas:** `#ECECEC`. A solid metallic silver base that mimics brushed aluminum hardware.
- **Panel Backgrounds:** `rgba(255, 255, 255, 0.75)` with a `10px` backdrop blur. This represents the "Milk Glass" aesthetic found in early translucent enclosures.
- **Metallic Bars:** Linear gradient from `#D4D4D4` to `#B8B8B8`. Used for toolbars, title bars, and structural dividers.
- **Aqua Blue (Primary):** Linear gradient from `#2B82EC` to `#1359D0`. This is the signature "Jelly" color for primary actions.
- **Aqua Emerald (Success):** Linear gradient from `#22C55E` to `#15803D`. Used for active states and "Go" actions.
- **Aqua Red (Alert):** Linear gradient from `#EF4444` to `#B91C1C`. Used for destructive actions or stop states.
- **Window Controls:** Distinctive solid circles for Red (Close), Yellow (Minimize), and Green (Zoom/Maximize).

## Typography

This design system uses modern alternatives to classic system fonts to ensure high legibility and cross-platform consistency.

- **Interface Text:** Use **Inter** as the primary body font. It captures the utilitarian clarity of Helvetica Neue while being optimized for screen-first rendering.
- **Headings:** **Libre Franklin** provides the sturdy, professional weight of Lucida Grande. Use bold weights for window titles and section headers.
- **Technical/Code:** **JetBrains Mono** replaces Monaco for all monospaced requirements, providing a technical, precise feel for data and inputs.
- **Styling:** Headlines should often feature a subtle white text-shadow (`0px 1px 0px rgba(255,255,255,0.8)`) when placed on metallic backgrounds to simulate engraving.

## Layout & Spacing

The layout philosophy follows a **fixed-fluid hybrid** model. Main application windows have fixed minimum widths, while internal content areas utilize fluid containers.

- **Grid:** A 12-column grid is used for primary content, but structural elements (sidebars, toolbars) use fixed pixel widths (e.g., 200px sidebars) to maintain the "app-like" feel of desktop software.
- **Rhythm:** Spacing follows a 4px baseline. Use 16px (md) for standard internal padding and 24px (lg) for external margins between panels.
- **Safe Areas:** Ensure a 20px gutter between glass panels to allow the metallic background to create visual separation.

## Elevation & Depth

Depth is the defining characteristic of this design system. It is achieved through three specific layers:

1.  **Base Layer:** The metallic `#ECECEC` background, which feels heavy and solid.
2.  **Recessed Layer:** Used for input fields and content wells. These use an `inset` shadow (`inset 0 2px 4px rgba(0,0,0,0.2)`) and a darker background to appear carved into the interface.
3.  **Raised Layer:** Used for buttons and floating windows.
    - **Windows/Panels:** Utilize a soft, wide `30px` shadow with `0.15` opacity to simulate objects floating just above the metal surface.
    - **Active Buttons:** Feature a "glossy highlight" — a semi-transparent white-to-transparent gradient on the top half of the element to simulate a light source reflecting off a curved surface.

## Shapes

The shape language is dominated by the **Pill** and the **Rounded Rectangle**.

- **Buttons:** Always use the maximum roundedness (Pill-shaped) to evoke the classic Aqua look.
- **Windows:** Use `rounded-xl` (1.5rem / 24px) for the main application frame to soften the industrial metallic aesthetic.
- **Input Fields:** Use `rounded-lg` (1rem / 16px) to create "ovals" that feel comfortable and tactile.
- **Containers:** Internal content areas use `rounded-lg` to nest cleanly within the larger window frames.

## Components

### Buttons (The "Jelly" Button)
Buttons are the center-piece. They must feature:
- A vertical linear gradient (Primary Aqua Blue).
- A 1px internal white border-top at 50% opacity.
- A subtle outer glow when focused.
- A "pressed" state that inverts the gradient and removes the glossy highlight.

### Input Fields
Inputs are "recessed ovals." Apply a light grey background with a subtle inner shadow. Focus states should trigger a soft blue outer glow (`4px` spread) rather than a sharp border change.

### Glass Containers
Sidebars and panels use the `rgba(255, 255, 255, 0.75)` white with `backdrop-filter: blur(10px)`. Borders should be 1px solid white at 30% opacity to define the edge against the metallic background.

### Traffic Lights
Window controls must be positioned in the top-left of every primary panel. They are 12px circles with 8px spacing between them. On hover, they should reveal their respective icons (X, -, +) in a low-opacity black.

### Progress Bars
Progress indicators use the Aqua Emerald gradient. The track should be recessed (inner shadow), and the filler should have "candy stripe" animations—diagonal translucent white lines that slowly scroll to the right.

### Chips & Tags
Small pill-shaped elements using the Metallic Bar gradient. Text should be set in the Label-Mono font for a technical, serialized appearance.
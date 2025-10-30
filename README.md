# Speak Tutor Onboarding Experience

An interactive, animated onboarding experience for Speak Tutor, showcasing key features through a smooth scrolling interface.

## Tech Stack

- **React**: Frontend library for building user interfaces
- **TypeScript**: For type-safe JavaScript development
- **Tailwind CSS**: For utility-first styling and responsive design
- **Vite**: As the build tool and development server
- **React Icons**: For including various icons in the interface

## Project Setup

1. Clone the repository:
```bash
git clone https://github.com/anjalikray/Academically-Global---SWE-Assignment.git
cd Academically-Global---SWE-Assignment
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## Component Structure

The project follows a modular component structure:

### `OnBoardingScreens.tsx`
- Main component handling the onboarding experience
- Utilizes React's `useCallback` and `useState` hooks for performance optimization
- Implements scroll-based animations and responsive layouts
- Contains three main sections:
  1. Goals and Motivation
  2. Topic Selection
  3. Tutor Relationship
  4. User Testimonial

### Component Features

- **Screen Management**: Uses an array of screen objects for easy maintenance and scalability
- **Dynamic Styling**: Implements dynamic style calculations based on scroll position
- **Responsive Design**: Adapts to different screen sizes using Tailwind's responsive classes
- **Interactive Elements**: Includes hover effects and clickable cards

## Animations and Responsiveness

### Animations
1. **Scroll-Based Transitions**:
   - Uses `scrollProgress` state to track user scroll position
   - Implements smooth transitions using CSS transforms and opacity
   - Card stacking effect with dynamic scaling and positioning

2. **Interactive Elements**:
   - Hover animations on cards using `transition-transform` and `hover:scale-105`
   - Smooth opacity transitions for content visibility
   - Custom easing functions for natural movement

### Responsive Design
- **Mobile-First Approach**:
  - Uses Tailwind's responsive prefixes (`md:`, `lg:`)
  - Flexible layouts with percentage-based widths
  - Dynamic text sizing for different screens

- **Layout Adaptations**:
  - Stack layout on mobile devices
  - Side-by-side layout on larger screens
  - Responsive padding and margins
  - Fluid typography using responsive text classes

### Key Features
- Smooth scroll-based animations
- Responsive design that works across all device sizes
- Interactive UI elements with hover effects
- Performance optimized with `useCallback`
- Accessible markup structure

# Skip Size Selector - React TypeScript Project

# Link: https://skip-size-case.netlify.app/

![Skip Selector Desktop View](/desktop-ss.png)
_Desktop view of the Skip Size Selector application_

## Overview

This project is a redesigned Skip Hire application built with React, TypeScript, and Tailwind CSS. The application allows users to browse, filter, and select skip sizes for waste disposal.

## Key Features

- Responsive design that works on mobile, tablet, and desktop
- Interactive skip cards with detailed information
- Filtering capabilities for skip size and compatibility
- Progress tracking for the multi-step booking process
- Modern UI with improved user experience

## Technical Implementation

### Tech Stack

- React for UI components
- TypeScript for type safety
- Tailwind CSS for styling
- Lucide React for icons

### Project Structure

```
skip-selector/
├── src/
│   ├── components/
│   │   ├── Filters/
│   │   ├── Layout/
│   │   ├── ProgressSteps/
│   │   ├── SkipCard/
│   │   └── UI/
│   ├── hooks/
│   ├── pages/
│   ├── services/
│   ├── types/
│   └── utils/
```

### Design Approach

1. **Component-Based Architecture:**

   - Modular components for better maintainability
   - Clear separation of concerns

2. **Responsive Design:**

   - Mobile-first approach
   - Adaptive layouts for different screen sizes
   - Custom components for mobile and desktop

3. **Type Safety:**

   - TypeScript interfaces for all data structures
   - Properly typed component props
   - Type guards for runtime safety

4. **UI/UX Improvements:**
   - Modern dark theme with blue accents
   - Clear visual hierarchy
   - Animated elements for better user feedback
   - Improved accessibility with appropriate contrast

## Setup and Installation

1. Clone the repository

```bash
git clone <repository-url>
cd skip-selector
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm start
```

## Development Approach

### Skip Card Component

- Displays key information about each skip option
- Shows warnings for road placement and heavy waste compatibility
- Provides clear selection mechanism

### Filters

- Allows filtering by size, road placement, and waste compatibility
- Updates results in real-time
- Provides a count of active filters

### Progress Steps

- Visualizes the user's journey through the booking process
- Adapts to show the most relevant steps on mobile
- Provides clear indication of current position

### Responsive Footer

- Shows selected skip information
- Provides navigation controls
- Adapts layout for mobile devices

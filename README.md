# Pva Shop

A fully functional e-commerce website built with React, TypeScript, and Vite.

## Features

- **Responsive Design**: Works on all devices.
- **Modern UI**: Built with Tailwind CSS.
- **Routing**: Client-side routing with `react-router-dom`.
- **State Management**: Using Zustand.

## Tech Stack

- **Framework**: React + Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: GitHub Pages, Vercel

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/cactus702911-lang/pvashop.git
   cd pvashop
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

## Deployment

### GitHub Pages

To deploy to GitHub Pages:

```bash
npm run deploy
```

This will build the project and push the `dist` folder to the `gh-pages` branch.

### Vercel

The project is configured for Vercel deployment. Connect your GitHub repository to Vercel, and it will automatically detect the Vite settings.

Ensure the "Output Directory" is set to `dist` (default for Vite).

## Project Structure

- `src/`: Source code
  - `components/`: Reusable components
  - `pages/`: Page components
  - `styles/`: Global styles
- `public/`: Static assets
- `vite.config.ts`: Vite configuration

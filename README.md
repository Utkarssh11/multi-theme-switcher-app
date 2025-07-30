# Multi-Theme Switcher App

This is a React + TypeScript web application built for a frontend developer assessment. The app allows users to switch between three distinct visual themes, each with a unique layout, typography, and color scheme. The selected theme persists across pages and reloads.

## Live Demo

[Live Link](https://multi-theme-switcher-app-git-main-utkarsh-patidar-s-projects.vercel.app/)  

## Features

- Three fully distinct themes:
  - **Minimalist Theme:** Light layout with sans-serif font
  - **Dark Sidebar Theme:** Dark UI with sidebar and serif font
  - **Colorful Card Theme:** Bright, playful card-based layout using Google Fonts
- Persistent theme (saved in localStorage)
- Responsive layout (mobile & desktop)
- API integration with [FakeStore API](https://fakestoreapi.com/products)
- Multiple pages: Home, About, Contact
- Smooth animations when switching themes
- Built with React 18, TypeScript, and Context API

## Tech Stack

- React + TypeScript
- React Router
- Context API
- Tailwind CSS / Styled Components / CSS Modules
- Vite / CRA (whichever you used)
- CSS Variables for theme switching

## Project Structure (Simplified)

```

src/
├── components/       // Reusable UI components
├── context/          // ThemeContext API
├── pages/            // Home, About, Contact
├── types/            // Type definitions
├── App.tsx           // Main app component
├── index.tsx         // Entry point
└── index.css         // Global styles & themes

````

## Installation

```bash
git clone https://github.com/Utkarssh11/multi-theme-switcher-app.git
cd multi-theme-switcher-app
npm install
npm start
````

Then open [http://localhost:3000](http://localhost:3000)


## Notes

* TypeScript is used for type safety.
* Project is mobile-first and fully responsive.
* App is accessible and tested across modern browsers.

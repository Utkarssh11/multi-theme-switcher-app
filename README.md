# Multi-Theme Switcher App

A modern React + TypeScript web application that demonstrates dynamic theming with three distinct visual themes. Each theme offers a unique layout, typography, and color scheme while maintaining full functionality and responsiveness.

## Features

### Theme System
- **Theme 1 (Minimalist)**: Clean, light design with sans-serif typography
- **Theme 2 (Dark Sidebar)**: Dark mode with sidebar layout and serif fonts
- **Theme 3 (Colorful Cards)**: Playful design with gradients and Google Fonts

### Core Features
- ✅ Persistent theme selection using localStorage
- ✅ Smooth transitions between themes
- ✅ Responsive design for all devices
- ✅ External API integration (FakeStore API)
- ✅ Loading states and error handling
- ✅ TypeScript for type safety
- ✅ Modern CSS with custom properties
- ✅ Lazy loading for better performance

### Pages
- **Home**: Product showcase with hero section and features
- **About**: Technology stack and theme information
- **Contact**: Contact form with validation

## Technologies Used

- **React 18** with Hooks and functional components
- **TypeScript** for type safety
- **React Router** for client-side routing
- **Context API** for global theme management
- **CSS Custom Properties** for dynamic theming
- **Responsive Design** with mobile-first approach

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd multi-theme-switcher-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (not recommended)

## Theme Details

### Theme 1: Minimalist
- **Layout**: Clean, centered layout
- **Colors**: Light background with blue accents
- **Typography**: Sans-serif fonts
- **Spacing**: Compact and organized

### Theme 2: Dark Sidebar
- **Layout**: Dark sidebar with main content area
- **Colors**: Dark backgrounds with red accents
- **Typography**: Serif fonts for elegance
- **Spacing**: Generous spacing for readability

### Theme 3: Colorful Cards
- **Layout**: Card-based grid layout
- **Colors**: Colorful gradients and bright accents
- **Typography**: Google Fonts (Pacifico)
- **Spacing**: Large, playful spacing

## Responsive Design

The application is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.tsx      # Navigation and theme switcher
│   ├── Layout.tsx      # Main layout wrapper
│   ├── ProductCard.tsx # Product display component
│   └── *.css          # Component styles
├── context/            # Global state management
│   └── ThemeContext.tsx
├── pages/              # Page components
│   ├── Home.tsx        # Home page with products
│   ├── About.tsx       # About page
│   ├── Contact.tsx     # Contact page
│   └── *.css          # Page styles
├── types/              # TypeScript type definitions
│   └── index.ts
├── App.tsx             # Main app component
├── index.tsx           # Entry point
└── index.css           # Global styles
```

## API Integration

The app fetches product data from [FakeStore API](https://fakestoreapi.com/products) to demonstrate external data integration.

## Customization

### Adding New Themes
1. Add theme variables to `src/index.css`
2. Create theme-specific styles in component CSS files
3. Update the Theme type in `src/types/index.ts`
4. Add theme option to the dropdown in `src/components/Header.tsx`

### Modifying Existing Themes
- Edit CSS custom properties in `src/index.css`
- Update theme-specific styles in component files
- Test across different screen sizes

## Deployment

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`

### Netlify
1. Build the project: `npm run build`
2. Deploy the `build` folder to Netlify

### GitHub Pages
1. Add `"homepage": "https://username.github.io/repo-name"` to package.json
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add deploy scripts to package.json:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
4. Run: `npm run deploy`

## Testing

The application includes:
- TypeScript for compile-time error checking
- Responsive design testing
- Cross-browser compatibility
- Accessibility features

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Support

For questions or support, please contact:
- Email: hello@themeswitcher.com
- GitHub Issues: [Create an issue](https://github.com/username/repo-name/issues)

---

**Built with using React, TypeScript, and modern web technologies** 
=======
# multi-theme-switcher-app
Submission for React Frontend Developer Technical Assessment – Includes theme switching, routing, API integration, and responsive design.

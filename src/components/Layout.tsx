import React from 'react';
import { useTheme } from '../context/ThemeContext';
import Header from './Header';
import './Layout.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div className={`layout layout-${theme}`}>
      <Header />
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default Layout; 
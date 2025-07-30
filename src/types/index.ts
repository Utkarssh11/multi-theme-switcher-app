export type Theme = 'theme1' | 'theme2' | 'theme3';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export interface HeaderProps {
  theme: Theme;
  onThemeChange: (theme: Theme) => void;
}

export interface ProductCardProps {
  product: Product;
}

export interface LayoutProps {
  children: React.ReactNode;
} 
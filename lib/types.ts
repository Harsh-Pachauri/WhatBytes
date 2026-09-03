export type Category = "electronics" | "clothing" | "home";

export interface Product {
  id: string;
  title: string;
  price: number;
  category: Category;
  brand: string;
  image: string;
  description: string;
  rating?: number;
  stock?: number;
}

export interface CartItem {
  productId: string;
  quantity: number;
}

export interface ProductFilters {
  category: string;
  price: number;
  q: string;
  brands: string[];
}

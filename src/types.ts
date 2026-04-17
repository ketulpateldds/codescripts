export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  sales: number;
  updatedAt: string;
  tags: string[];
  thumbnail: string;
  category: string;
  isFeatured?: boolean;
  isTrending?: boolean;
  isBestSeller?: boolean;
}

export interface Category {
  id: string;
  title: string;
  icon: string;
  count: number;
}

export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    categoryId: number;
    image: string;
    stock: number;
  }
  
  export interface Category {
    id: number;
    name: string;
    slug: string;
  }

  export interface CartItemItem extends Product {
    quantity: number;
  }
  export interface CartContextType {
    cart: CartItemItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: number) => void;
    updateQuantity: (productId: number, quantity: number) => void;
    cartTotal: number;
  }
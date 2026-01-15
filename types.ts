
export interface Cake {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: 'Minimalist' | 'Floral' | 'Cartoon' | 'Elegant';
  colors: string[];
}

export interface Customization {
  flavor: string;
  size: string;
  message: string;
  primaryColor: string;
}

export interface CartItem extends Cake {
  customization: Customization;
  quantity: number;
}

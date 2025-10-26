export interface Motorcycle {
  id: number;
  name: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  image: string;
  description: string;
  category: 'sport' | 'cruiser' | 'touring' | 'adventure' | 'naked';
  engine: string;
  power: string;
  weight: string;
  features: string[];
  inStock: boolean;
}

export interface CartItem {
  motorcycle: Motorcycle;
  quantity: number;
}

export interface Customer {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
}

export interface Order {
  id: string;
  customer: Customer;
  items: CartItem[];
  total: number;
  date: Date;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
}

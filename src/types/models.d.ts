interface Order {
  id: string;
  totalQuantity: number;
  totalAmount: number;
  restaurantId: string;
  status: string;
  buyerId: string;
  buyerRead: boolean;
  vendorRead: boolean;
  location: string;
  createdAt: Date;
}

interface User {
  id: string;
  email: string;
  password: string;
  fullname: string;
  emailVerified: boolean;
  createdAt: string;
  id: string;
  updatedAt: string;
  isVendor: boolean;
}

interface Restaurant {
  id: string;
  string;
  name: string;
  desc: string;
  address: string;
  openingTime: string;
  closingTime: string;
  email: string;
  contact1: string;
  contact2: string;
  contact3: string;
  imageUrl: string;
  vendorId: string;
}

interface Category {
  id: string;
  vendorId: string;
  restaurantId: string;
  name: string;
  desc: string;
  imageUrl: string;
}

interface Dish {
  id: string;
  categoryId: string;
  vendorId: string;
  restaurantId: string;
  name: string;
  desc: string;
  price: number;
  time: string;
  imageUrl: string;
}

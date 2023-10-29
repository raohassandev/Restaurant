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

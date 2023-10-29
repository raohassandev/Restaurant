import ORDER_STATUS_STRING from "./constants";

export const countNewOrders = (orders: Order[]) => {
  if (orders) {
    let newOrderPlaced = 0;
    orders.forEach((order) => {
      if (order.status === ORDER_STATUS_STRING.orderPlaced) {
        newOrderPlaced += 1;
      }
    });
    return newOrderPlaced;
  }
  return null;
};
export const countNewVendorOrdersByDate = (orders: Order[], date: string) => {
  if (orders) {
    let newOrderPlaced = 0;
    orders.forEach((order) => {
      const orderdate = new Date(order.createdAt).toDateString();
      // if (order.status === ORDER_STATUS_STRING.orderPlaced && orderdate === date) {
      //   newOrderPlaced += 1;
      // }
      if (order.vendorRead === false && orderdate === date) {
        newOrderPlaced += 1;
      }
    });
    return newOrderPlaced;
  }
  return null;
};

export const sortOrderByDate = (orders: Order[]) => {
  const groupedOrders = orders.reduce((acc: any, order: Order) => {
    const date = new Date(order.createdAt).toDateString();
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(order);

    const dataArray = Object.entries(acc);

    // Sort the array by date in descending order
    dataArray.sort(
      (a: any, b: any) => (new Date(b[0]) as any) - (new Date(a[0]) as any)
    );

    // Convert the sorted array back to an object
    const sortedData = Object.fromEntries(dataArray);

    return sortedData;
  }, {});
  return groupedOrders;
};

import Restaurant from './Restaurant.js';

// Create a new restaurant
const myRestaurant = new Restaurant("My Fancy Restaurant");

// Add menu items
myRestaurant.menu.addItem("Pizza", 12.99);
myRestaurant.menu.addItem("Pasta", 8.99);
myRestaurant.menu.addItem("Burger", 9.99);

// Display the menu
myRestaurant.menu.displayMenu();

// Add a customer
const customer = myRestaurant.addCustomer("C001", "John Doe");

// Place an order for the customer
const order = myRestaurant.placeOrder(customer.customerId, [
    { name: "Pizza", price: 12.99 },
    { name: "Burger", price: 9.99 }
]);

// Customer places the order
customer.placeOrder(order);

// Display all orders
myRestaurant.displayOrders();

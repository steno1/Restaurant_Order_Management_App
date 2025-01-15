// Import the Restaurant class from the Restaurant.js file
import Restaurant from './Restaurant.js';

// Create a new restaurant instance with the name "My Fancy Restaurant"
const myRestaurant = new Restaurant("My Fancy Restaurant");

// Add menu items to the restaurant's menu
myRestaurant.menu.addItem("Pizza", 12.99); // Add "Pizza" with a price of 12.99
myRestaurant.menu.addItem("Pasta", 8.99); // Add "Pasta" with a price of 8.99
myRestaurant.menu.addItem("Burger", 9.99); // Add "Burger" with a price of 9.99

// Display the current menu with all the items and their prices
myRestaurant.menu.displayMenu(); // Call the displayMenu method to show the menu in the console

// Add a customer to the restaurant with ID "C001" and name "John Doe"
const customer = myRestaurant.addCustomer("C001", "John Doe"); // Create a new customer and add them to the customers list

// Place an order for the customer, specifying the items they want to order
const order = myRestaurant.placeOrder(customer.customerId, [
    { name: "Pizza", price: 12.99 }, // Order a "Pizza" costing 12.99
    { name: "Burger", price: 9.99 }  // Order a "Burger" costing 9.99
]);

// Customer places the order, which will be added to the orders array
customer.placeOrder(order); // This method places the order for the customer

// Display all orders currently in the restaurant's system
myRestaurant.displayOrders(); // Display all the orders placed, including their details (order ID, customer ID, items, and total)

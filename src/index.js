// Import the Restaurant class from the Restaurant.js file
import Restaurant from './Restaurant.js';

// Create a new restaurant instance with the name "My Fancy Restaurant"
const myRestaurant = new Restaurant("My Fancy Restaurant");

// Add menu items to the restaurant's menu
myRestaurant.menu.addItem("Cashew-Nut", 7000); // Add "Cashew-nut" with a price of 7000
myRestaurant.menu.addItem("Fried-Rice", 5000); // Add "Pasta" with a price of 5000
myRestaurant.menu.addItem("Burger", 3000); // Add "Burger" with a price of 3000

// Display the current menu with all the items and their prices
myRestaurant.menu.displayMenu(); // Call the displayMenu method to show the menu in the console

// Add a customer to the restaurant with ID "C001" and name "Onu Princeley"
const customer = myRestaurant.addCustomer("C001", "Onu Princeley"); // Create a new customer and add them to the customers list

// Place an order for the customer, specifying the items they want to order
const order = myRestaurant.placeOrder(customer.customerId, [
    { name: "Cashew-Nut", price: 7000 }, // Order a "Cashew-Nut" costing 7000
    { name: "Fried-Rice", price: 5000 }  // Order a "Fried-Rice" costing 5000
]);

// Customer places the order, which will be added to the orders array
customer.placeOrder(order); // This method places the order for the customer

// Display all orders currently in the restaurant's system
myRestaurant.displayOrders(); // Display all the orders placed, including their details (order ID, customer ID, items, and total)

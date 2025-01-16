// Importing the required modules
import Menu from './Menu.js'; // Importing the Menu class to manage the restaurant's menu
import Order from './Order.js'; // Importing the Order class to manage customer orders
import Customer from './Customer.js'; // Importing the Customer class to manage customer data

// Restaurant class to represent the restaurant system
class Restaurant {
    // Static property to keep track of the total number of restaurant instances
    static totalRestaurants = 0;

    // Constructor to initialize a restaurant instance with a name
    constructor(name) {
        this.name = name; // Set the name of the restaurant
        this.menu = new Menu(); // Initialize the menu for the restaurant
        this.orders = []; // Initialize an empty array for storing orders
        this.customers = []; // Initialize an empty array for storing customers
        Restaurant.totalRestaurants++; // Increment the static totalRestaurants property
    }

    // Method to add a customer to the restaurant's customer list
    addCustomer(customerId, name) {
        const customer = new Customer(customerId, name); // Create a new customer instance
        this.customers.push(customer); // Add the customer to the customer list
        return customer; // Return the created customer object
    }

    // Method to place an order for a customer
    placeOrder(customerId, items) {
        const orderId = `ORD${this.orders.length + 1}`; // Generate a unique order ID
        const order = new Order(orderId, customerId, items); // Create a new order with the customer ID and items
        this.orders.push(order); // Add the new order to the orders array
        return order; // Return the created order object
    }

    // Method to display all the orders of the restaurant
    displayOrders() {
        console.log(`Orders for ${this.name}:`); // Display the restaurant's name
        // Loop through each order and display its details
        this.orders.forEach(order => order.displayOrder());
    }

    // Static method to display the total number of restaurant instances created
    static displayTotalRestaurants() {
        console.log(`Total restaurants created: ${Restaurant.totalRestaurants}`); // Log the total number of restaurants
    }
}

// Export the Restaurant class for use in other files
export default Restaurant;

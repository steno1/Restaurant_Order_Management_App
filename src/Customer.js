// Define the Customer class to represent a customer in the restaurant system
class Customer {
    // Constructor initializes the customer with a unique customer ID and name
    constructor(customerId, name) {
        this.customerId = customerId; // Assigns the unique ID to the customer
        this.name = name; // Assigns the name of the customer
    }

    // Method to place an order for the customer
    placeOrder(order) {
        // Prints a message to the console indicating that the customer placed an order
        console.log(`${this.name} placed an order with ID: ${order.orderId}`);
    }
}

// Export the Customer class so it can be used in other modules
export default Customer;

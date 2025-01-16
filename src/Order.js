// Order class to represent an individual customer's order
class Order {
    // Constructor to initialize an order with an order ID, customer ID, and list of items
    constructor(orderId, customerId, items) {
        this.orderId = orderId; // Set the unique order ID
        this.customerId = customerId; // Set the customer ID who placed the order
        this.items = items; // Set the array of items in the order (items are objects with properties like name and price)
    }

    // Method to calculate the total price of the order
    calculateTotal() {
        // Use the reduce method to sum up the prices of all items in the order
        return this.items.reduce((total, item) => total + item.price, 0);
    }

    // Method to display the details of the order (order ID, customer ID, items, and total price)
    displayOrder() {
        console.log(`Order ID: ${this.orderId}`); // Display the order ID
        console.log(`Customer ID: ${this.customerId}`); // Display the customer ID who placed the order
        console.log('Items:'); // Label for the list of items
        // Loop through each item in the order and display its name and price
        this.items.forEach(item => {
            console.log(`- ${item.name}: $${item.price}`); // Display the item name and price
        });
        // Display the total price by calling the calculateTotal method
        console.log(`Total: ₦${this.calculateTotal()}`);
    }
}

// Export the Order class for use in other files
export default Order;

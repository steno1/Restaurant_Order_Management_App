// Order class to represent an individual customer's order
class Order {
    // Static property representing the VAT (Value-Added Tax) rate for orders
    static VAT_RATE = 0.075;

    // Constructor to initialize an order with an order ID, customer ID, and list of items
    constructor(orderId, customerId, items) {
        this.orderId = orderId; // Set the unique order ID
        this.customerId = customerId; // Set the customer ID who placed the order
        this.items = items; // Set the array of items in the order (each item is an object with name and price)
    }

    // Method to calculate the total price of the order, including VAT
    calculateTotal() {
        const total = this.items.reduce((total, item) => total + item.price, 0); // Sum up the prices of all items
        return total + total * Order.VAT_RATE; // Add VAT to the total
    }

    // Method to display the details of the order (order ID, customer ID, items, and total price)
    displayOrder() {
        console.log(`Order ID: ${this.orderId}`); // Display the order ID
        console.log(`Customer ID: ${this.customerId}`); // Display the customer ID who placed the order
        console.log('Items:'); // Label for the list of items
        // Loop through each item in the order and display its name and price
        this.items.forEach(item => {
            console.log(`- ${item.name}: ₦${item.price}`); // Display the item name and price
        });
        // Display the total price by calling the calculateTotal method
        console.log(`Total (incl. VAT): ₦${this.calculateTotal().toFixed(2)}`);
    }

    // Static method to display the VAT rate currently being applied
    static displayVATRate() {
        console.log(`Current VAT rate: ${Order.VAT_RATE * 100}%`); // Log the VAT rate as a percentage
    }
}

// Export the Order class for use in other files
export default Order;

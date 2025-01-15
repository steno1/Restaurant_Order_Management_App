class Order {
    constructor(orderId, customerId, items) {
        this.orderId = orderId;
        this.customerId = customerId;
        this.items = items; // Array of menu items
    }

    // Calculate the total price of the order
    calculateTotal() {
        return this.items.reduce((total, item) => total + item.price, 0);
    }

    // Display order details
    displayOrder() {
        console.log(`Order ID: ${this.orderId}`);
        console.log(`Customer ID: ${this.customerId}`);
        console.log('Items:');
        this.items.forEach(item => {
            console.log(`- ${item.name}: $${item.price}`);
        });
        console.log(`Total: $${this.calculateTotal()}`);
    }
}

export default Order;

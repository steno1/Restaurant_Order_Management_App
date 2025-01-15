class Customer {
    constructor(customerId, name) {
        this.customerId = customerId;
        this.name = name;
    }

    placeOrder(order) {
        console.log(`${this.name} placed an order with ID: ${order.orderId}`);
    }
}

module.exports = Customer;

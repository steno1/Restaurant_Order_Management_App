import Menu from './Menu.js';
import Order from './Order.js';
import Customer from './Customer.js';

class Restaurant {
    constructor(name) {
        this.name = name;
        this.menu = new Menu();
        this.orders = [];
        this.customers = [];
    }

    addCustomer(customerId, name) {
        const customer = new Customer(customerId, name);
        this.customers.push(customer);
        return customer;
    }

    placeOrder(customerId, items) {
        const orderId = `ORD${this.orders.length + 1}`;
        const order = new Order(orderId, customerId, items);
        this.orders.push(order);
        return order;
    }

    displayOrders() {
        console.log(`Orders for ${this.name}:`);
        this.orders.forEach(order => order.displayOrder());
    }
}

export default Restaurant;

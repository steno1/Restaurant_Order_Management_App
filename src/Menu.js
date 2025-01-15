class Menu {
    constructor() {
        this.items = [];
    }

    addItem(name, price) {
        this.items.push({ name, price });
    }

    displayMenu() {
        console.log('Menu:');
        this.items.forEach(item => {
            console.log(`- ${item.name}: $${item.price}`);
        });
    }
}

export default Menu;

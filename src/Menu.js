// Menu class to represent the restaurant's menu, containing a list of available items
class Menu {
    // Constructor to initialize the menu with an empty array of items
    constructor() {
        this.items = []; // Initialize the items array to store menu items
    }

    // Method to add a new item to the menu
    addItem(name, price) {
        // Push an object containing the item name and price to the items array
        this.items.push({ name, price });
    }

    // Method to display the menu with all the items and their prices
    displayMenu() {
        console.log('Menu:'); // Display the menu header
        // Loop through each item in the items array and display its name and price
        this.items.forEach(item => {
            console.log(`- ${item.name}: $${item.price}`); // Log each menu item and its price
        });
    }
}

// Export the Menu class for use in other files
export default Menu;

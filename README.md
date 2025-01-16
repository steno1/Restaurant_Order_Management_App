# 🍽️ Restaurant Order Management System  

---

## 📝 Problem Domain  

### Title of the System:  
**Restaurant Order Management System**  

### What the System Does:  
This system allows restaurants to manage their menu items, customers, and orders efficiently. Customers can place orders containing multiple items, and the system calculates the total cost and maintains a record of all orders and customer details.

---

## 📋 UML Class Diagram  

The UML Class Diagram visually represents the core components of the system and their relationships.  

### 📂 Diagram Location  
The diagram is located in the `assets` folder of the project. You can view it by navigating to:  
`/Restaurant_Order_Management_System/src/assets/uml-class-diagram.png`

![UML Class Diagram](src/assets/uml-class-diagram.png)


### 📖 Explanation of the UML Diagram  

#### 🏢 Restaurant Class  

- **Attributes**:  
  - `name (String)`: The name of the restaurant.  
  - `menu (Array<Menu>)`: List of menu items available in the restaurant.  
  - `orders (Array<Order>)`: List of all orders placed in the restaurant. 

- **Methods**:  
  - `addCustomer(customer: Customer): void`: Adds a customer to the restaurant.  
  - `placeOrder(order: Order): void`: Places an order for a customer.  
  - `displayOrders(): void`: Displays all orders.  

#### 🍽️ Menu Class  

- **Attributes**:  
  - `items (Array<Item>)`: List of menu items available.  

- **Methods**:  
  - `addItem(item: Item): void`: Adds a new item to the menu.  
  - `displayMenu(): void`: Displays all menu items.  

#### 🛒 Order Class  

- **Attributes**:  
  - `orderId (String)`: Unique identifier for each order.  
  - `items (Array<Item>)`: List of items in the order.  
  - `total (Number)`: Total cost of the order.  

- **Methods**:  
  - `calculateTotal(): Number`: Calculates the total cost of the order.  
  - `displayOrder(): void`: Displays the order details.  

#### 👤 Customer Class  

- **Attributes**:  
  - `customerId (String)`: Unique identifier for each customer.  
  - `name (String)`: Name of the customer.  

- **Methods**:  
  - `register(): void`: Registers a new customer.  
  - `placeOrder(order: Order): void`: Places an order for the customer.  

---

## 🚀 Features  
- **Menu Management**: Add and display menu items.  
- **Customer Management**: Add customers and track their orders.  
- **Order Placement**: Customers can place orders with multiple items.  
- **Order Summary**: View all orders, including calculated totals.

---

## 🛠️ Installation  

### Clone the Repository  
Clone the repository to your local machine:  

```bash
git clone https://github.com/your-username/Restaurant_Order_Management_System.git
Install Dependencies
Navigate into the project directory and install the required dependencies:

cd Restaurant_Order_Management_System
npm install
🏃‍♂️ How to Run the App
Start the server using Nodemon for automatic file reloads:


npm start
Sample Output
plaintext

Menu:
- Cashew-Nut: ₦7000
- Fried-Rice: ₦5000
- Burger: ₦3000

Onu Princeley placed an order with ID: ORD1
Orders for My Fancy Restaurant:
Order ID: ORD1
Customer ID: C001
Items:
- Cashew-Nut: ₦7000
- Fried-Rice: ₦5000
Total (incl. VAT): ₦12900.00

📁 File Structure

/Restaurant_Order_Management_System
├── /src
│   ├── Menu.js          # Menu class for managing menu items
│   ├── Order.js         # Order class for handling order creation and calculations
│   ├── Customer.js      # Customer class for managing customer information
│   ├── Restaurant.js    # Main logic for tying menu, customers, and orders together
│   └── index.js         # Entry point to execute the application
├── /assets              # Contains the UML class diagram
│   └── RestaurantOrderManagementSystem_UML.png
├── package.json         # Project dependencies and scripts
└── README.md            # Project documentation
⚙️ Technologies Used
JavaScript (Node.js): Core programming language.
Nodemon: Automatically restarts the server on file changes during development.
🧑‍💻 Contributing
Fork the repository.

Create a new branch:

git checkout -b feature-xyz
Make your changes and commit:

git commit -m 'Add feature xyz'
Push to the branch:

git push origin feature-xyz
Open a pull request.

📝 License
This project is licensed under the MIT License.

📧 Contact
For inquiries, reach out at: 📩 onuprinceley@gmail.com